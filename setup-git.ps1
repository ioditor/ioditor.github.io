$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$expectedOrigin = 'https://github.com/ioditor/ioditor.github.io.git'
if (-not (Test-Path -LiteralPath '.git')) {
    git init -b main
    if ($LASTEXITCODE -ne 0) { throw 'git init failed' }
}
$branch = git symbolic-ref --short HEAD
if ($LASTEXITCODE -ne 0 -or $branch -ne 'main') { throw 'Expected main. Existing branch was left unchanged.' }
$currentOrigin = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote add origin $expectedOrigin
    if ($LASTEXITCODE -ne 0) { throw 'git remote add failed' }
} elseif ($currentOrigin -ne $expectedOrigin) {
    throw 'Existing origin differs. It was left unchanged.'
}
$pushOrigin = git remote get-url --push origin
if ($LASTEXITCODE -ne 0 -or $pushOrigin -ne $expectedOrigin) { throw 'Push origin differs. It was left unchanged.' }
Write-Output 'Ready: main + origin. No commit or push performed.'
