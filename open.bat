start /B Palette.exe
start /B if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd /d "%~dp0\back"
start /min cmd /C "node index.js"
goto :EOF
:minimized
