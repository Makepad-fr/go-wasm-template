package main

import (
	"syscall/js"
)

func add(this js.Value, inputs []js.Value) interface{} {
	return inputs[0].Int() + inputs[1].Int()
}

func registerCallbacks() {
	js.Global().Set("add", js.FuncOf(add))
}

func main() {
	c := make(chan struct{}, 0)

	println("WASM Go Initialized")
	registerCallbacks()
	// prevent the wasm binary exit.
	<-c
}
