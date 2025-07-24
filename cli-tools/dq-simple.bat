@echo off
if "%~1"=="" (
    echo Please provide a URL as argument
    echo Usage: dq-simple.bat "your_url_here"
    exit /b 1
)

node dq.js "%~1"