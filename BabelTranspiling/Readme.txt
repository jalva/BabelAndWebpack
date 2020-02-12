Pre-build Event Command Line:

set Path=%PATH%;%ProgramW6432%\nodejs\
if $(Configuration) == Debug (
	if(exist "$(ProjectDir)\node_modules\webpack" (
		if exist "$(ProjectDir)\node_modules\babel-loader" (
			if exist "$(ProjectDir)\node_modules\@babel" (
				goto :ok
			)
		) else goto :download
	) else goto :download

	:download
	echo downloading npm packages
	npm install
	npm run build
	:ok
	echo packages already installed
	npm run build
)