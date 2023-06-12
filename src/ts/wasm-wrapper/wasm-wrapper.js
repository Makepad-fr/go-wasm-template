export class WasmWrapper {

    #instance;
    #module;

    /**
     * Creates a new instance of WasmWrapper with the given wasm file path
     * @param {string} wasmFilePath The path for the Wasm file
     */
    constructor(instance, module) {
        this.#instance = instance;
        this.#module = module;
        this.#initFunctions();
    }

    /**
     * Creates a new instance of wasm wrapper and connects
     * @param {string} wasmFilePath The path to the wasm file on server
     * @returns A Promise containing the created WasmWrapper instance
     */
    static async init(wasmFilePath) {
        const Go = window.Go;
        if (!WebAssembly.instantiateStreaming) { // polyfill
            WebAssembly.instantiateStreaming = async (resp, importObject) => {
                const source = await (await resp).arrayBuffer();
                return await WebAssembly.instantiate(source, importObject);
            };
        }
        const go = new Go();
        return WebAssembly.instantiateStreaming(fetch(wasmFilePath), go.importObject)
            .then(result => {
                go.run(result.instance);
                return new WasmWrapper(result.instance, result.module);
            });
    }
    /**
     * Init functions that will be exported
     * @param {WebAssembly.Instance} instance The WebAssemblyInstances 
     */
    #initFunctions(instance) {

        /* TODO: 
            * Add JS and Go function bindings here 
            * As the wasm_exec is already imported in HTML, all functions are accessible using window.
        */
        this.add = (arg1, args2) =>window.add(arg1, args2);
    }
}

