package main

import "syscall/js"

// TODO: Add here all wasm exposed Go code wrapeprs

func add(this js.Value, inputs []js.Value) interface{} {
	return inputs[0].Int() + inputs[1].Int()
}

func main() {
	js.Global().Set("add", js.FuncOf(add))
	<-make(chan bool) // Keep the Go program running
}
