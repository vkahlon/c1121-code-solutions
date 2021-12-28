function ExampleConstructor() {}
console.log('The value of ExampleConstructor:', ExampleConstructor);
console.log('The typeof ExampleConstructor:', typeof ExampleConstructor);

var testExample = new ExampleConstructor();
console.log('The value of testExample:', testExample);

var isItInstance = testExample instanceof ExampleConstructor;
console.log('The Value of isItInstance:', isItInstance);
