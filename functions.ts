// Function Sum
function sum(a: number, b: number): number {
    return a + b;
}
// Call function sum
const result: number = sum(5, 10);
console.log(`The sum is: ${result}`);

// Arrow function multiphy
const multiphy = (a: number, b: number): number => {
    return a * b;
};
// Call function multiphy
const resultMultiphy: number = multiphy(5, 10);
console.log(`The multiphy is: ${resultMultiphy}`);

// Greeting function with name parameter
function greet(name: string, role: string = "Guest"): void {
    console.log(`Hello, ${name}! You are a ${role}`);
}
// Call function greet
greet("Thinh", );

// Async function in message delay
async function delayPrint(msg: string, time: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}
// Call function delayPrint
delayPrint("This message is delayed by 2 seconds", 2000);

