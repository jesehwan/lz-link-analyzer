@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Please provide a URL as argument
    exit /b 1
)

set "url=%~1"

REM Extract clickenc parameter using PowerShell
for /f "delims=" %%i in ('powershell -Command "if ('%url%' -match 'clickenc=([^&]+)') { $matches[1] }"') do set "clickenc=%%i"

if not defined clickenc (
    echo No clickenc parameter found in URL
    exit /b 1
)

REM Double URL decode using PowerShell
for /f "delims=" %%i in ('powershell -Command "[System.Web.HttpUtility]::UrlDecode([System.Web.HttpUtility]::UrlDecode('%clickenc%'))"') do set "decoded=%%i"

REM Extract q parameter using PowerShell
for /f "delims=" %%i in ('powershell -Command "if ('%decoded%' -match 'q=([^&]+)') { $matches[1] }"') do set "qparam=%%i"

if not defined qparam (
    echo No q parameter found in decoded URL
    exit /b 1
)

REM Run the decompression
node dist/decompress.js "%qparam%"