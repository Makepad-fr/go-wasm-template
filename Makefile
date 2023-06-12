build: build-wasm build-web
build-wasm: install-go-dependencies
	GOOS=js GOARCH=wasm go build -o ./src/ts/main.wasm ./src/go/main.go
build-web: install-web-dependencies
	npm run build
install-dependencies: install-web-dependencies install-go-dependencies
install-web-dependencies:
	npm install
install-go-dependencies:
	go mod download
