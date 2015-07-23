
scss:
	@sassc --sourcemap scss/*.scss www/main.css

clean:
	@rm -rf www/*

watch:
	gulp lint

all: clean 

.PHONY: all

