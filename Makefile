
sass:
	@#node-sass --source-map www/main.css.map --output-style compressed scss/*.scss www/*.css
	@sassc --sourcemap scss/*.scss www/main.css

watch:
	gulp lint

