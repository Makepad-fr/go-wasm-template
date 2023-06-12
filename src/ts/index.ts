
import {WasmWrapper} from './wasm-wrapper/wasm-wrapper';

WasmWrapper.init("/wasm/main.wasm").then((wrapper: WasmWrapper) => {
  // TODO: Add methods right after the 
  console.log(wrapper.add(12, 22));
})
