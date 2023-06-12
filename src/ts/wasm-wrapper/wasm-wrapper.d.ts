export declare class WasmWrapper {
    public static init(wasmfilePath: string): Promise<WasmWrapper>;
    // TODO: Add more public functions for each binding
    public add(arg1: number, arg2: number): number;
}
