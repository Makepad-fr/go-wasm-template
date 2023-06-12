build: install-dependencies build-wasm build-web

build-wasm: build-wasm-go build-wasm-bundle
build-wasm-bundle:
	npm run bundle
build-wasm-go:
	GOOS=js GOARCH=wasm go build -o ./public/wasm/main.wasm ./src/go/wasm_main.go
build-web:
	npm run build:server
install-dependencies: install-web-dependencies install-go-dependencies
install-web-dependencies:
	npm install
install-go-dependencies:
	go mod download
