let foo: string = "test";
let bar: number = 0xff;
let baz: string[] = ["Hello,", " world!"];
let boo: number[] = [2, 4, 6]
let baa: boolean[] = [false, true]

console.log("Printed: " + foo);
console.log("Printed: " + bar);
console.log("Printed: " + baz);
console.log("Printed: " + boo);
console.log("Printed: " + baa);

let numbers = [2, 3, 4, 5, 6, 7, 7]
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);

}

let message1: string = "test 1"
console.log(message1.replace(" ", ""));
