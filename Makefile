all: node_modules
	npm test

node_modules:
	npm install

clean:
	git clean -fdx
