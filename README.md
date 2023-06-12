# Go Wasm Template

This repository contains the boilterplate code of a web application that implemented using Go code compiled to WebAssembly, TypeScript and Webpack.

## Demo

- Build the project using `make build` command from the project's root.
- Once the project is built run the server using `node dist/server.js`
- Go to `localhost:3000` from your favorite Web Browser

## Entrypoints:

- [*src/ts/wasm-wrapper/wasm-wrapper.js*](./src/ts/wasm-wrapper/wasm-wrapper.js): Contains wrapper of the Wasm code to TypeScript. `#initFunctions` method is reponsible from the initialisation of the Wasm/TypeScript mapping.
- [*src/ts/wasm-wrapper/wasm-wrapper.d.ts*](./src/ts/wasm-wrapper/wasm-wrapper.d.ts): Contains the TypeScript type annotations for the `WasmWrapper`
- [*src/ts/index.ts*](./src/ts/index.ts): This is the entry point of the TypeScript bundle. All code should be called afther the `WasmWrapper` initialisation
- [*src/go/wasm_main.go*](./src/go/wasm_main.go): The main file used to create the Wasm executable from Go code. All functions that will be exposed to Wasm should created here. Please refer the existing function
- [*src/ts/server/server.ts*](./src/ts/server/server.ts): The code containing the Express.js server. This server is used for demo purposes, it'd be preferred to separate the bundle's source code and the server's source code in different project 
- [*public/index.html*](./public/index.html): The main HTML file used for the Demo. It's imported that the `wasm_exec.js` import should be placed before the `bundle.js` import to provide necessary variables (aka. `window.Go`) to the bundle. 
