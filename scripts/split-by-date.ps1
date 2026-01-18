param(
  [Parameter(Mandatory=$true)][string]$SourceDir,
  [Parameter(Mandatory=$true)][string]$OutDir,
  [int]$GapDays = 7
)

$ErrorActionPreference = "Stop"

function Ensure-Dir([string]$p){
  if(!(Test-Path $p)){ New-Item -ItemType Directory -Path $p | Out-Null }
}

function Get-TakenDate([string]$file){
  try{
    $shell = New-Object -ComObject Shell.Application
    $folder = $shell.Namespace((Split-Path $file))
    $item = $folder.ParseName((Split-Path $file -Leaf))
    $v = $folder.GetDetailsOf($item, 12) # often "Date taken"
    if($v){ return [datetime]::Parse($v) }
  } catch {}
  $fi = Get-Item $file
  if($fi.CreationTime -lt $fi.LastWriteTime){ return $fi.CreationTime }
  return $fi.LastWriteTime
}

Ensure-Dir $OutDir

$files = Get-ChildItem $SourceDir -File -Recurse | Where-Object {
  $_.Extension -match "\.(heic|jpg|jpeg|png|webp)$"
}

if($files.Count -eq 0){
  Write-Host "No files found in $SourceDir"
  exit 0
}

$items = $files | ForEach-Object {
  [pscustomobject]@{
    FullName = $_.FullName
    Name     = $_.Name
    Taken    = Get-TakenDate $_.FullName
  }
} | Sort-Object Taken

$proj = 1
$last = $null
$copied = 0

foreach($it in $items){
  if($last -ne $null){
    $gap = ($it.Taken - $last).TotalDays
    if($gap -gt $GapDays){ $proj++ }
  }

  $projDir = Join-Path $OutDir ("project-{0:D2}" -f $proj)
  Ensure-Dir $projDir

  Copy-Item -LiteralPath $it.FullName -Destination (Join-Path $projDir $it.Name) -Force

  $last = $it.Taken
  $copied++
}

Write-Host ("OK: Copied {0} files into {1} projects at {2}" -f $copied, $proj, $OutDir)
