import * as go from './wasm_exec';
import wasmBytes from './main.wasm';

let goInstance = new go.Go();
WebAssembly.instantiateStreaming(fetch(wasmBytes), go.importObject)
  .then((result: WebAssembly.WebAssemblyInstantiatedSource) => {
    goInstance.run(result.instance);
    runGoFunctions();
});

function runGoFunctions(): void {
    let add = (window as any).add;
    console.log(add(2, 3));  // prints: 5
}
