### 1. What is Node.js? How does it differ from browser JavaScript?
Node.js is a JavaScript runtime environment built on Chrome’s V8 engine that allows us to run JavaScript code outside the browser.
It is mainly used for building backend services such as APIs, servers, and real-time applications.

Difference from browser JavaScript:

The main difference is the environment.
- Browser JavaScript is used to manipulate the DOM and handle user interactions, while Node.js is used to handle server-side logic, file systems, databases, and network operations.
- Node.js does not have access to browser APIs like window or document, but it provides server-side modules like fs, http, and path.

### 2. What is the event loop in Node.js? Explain how it works.
The event loop is a core mechanism in Node.js that allows it to handle multiple operations asynchronously using a single thread.
It continuously checks the call stack and different task queues and executes callbacks when the stack is empty.

How it works:
- Synchronous code runs first
- Asynchronous operations are delegated to Node APIs
- Callbacks are placed into queues
- The event loop pushes them back to the call stack for execution

Example:

console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");


Output:

Start
End
Timer

### 3. What is non-blocking I/O? How does Node.js achieve it?
Non-blocking I/O means that the program does not wait for an input or output operation to finish before moving to the next task.
Node.js achieves this by delegating I/O operations to background threads and handling their results using callbacks, promises, or events.

Example: While reading a file, Node.js can handle other requests instead of waiting.

This makes Node.js highly efficient for I/O-heavy applications.

### 4. Explain the difference between synchronous and asynchronous code.
- Synchronous code executes line by line and blocks the next operation until the current one finishes.
- Asynchronous code allows long-running tasks to execute in the background, so the main thread can continue executing other code.

// Synchronous
const data = fs.readFileSync("file.txt");

// Asynchronous
fs.readFile("file.txt", () => {});

### 5. What are callbacks? What is callback hell?
A callback is a function passed as an argument to another function and executed after the completion of an asynchronous task.

Why important?
Callbacks enable javascript to perform non-blocking tasks such as fetching data from an api, reading files, handling user interations

Callback hell occurs when callbacks are nested within other callbacks multiple times, leading to code that is difficult to read and maintain.
This can appear when multiple asynchronous operations depend on th results of previous operation.

doA(() => {
  doB(() => {
    doC(() => {
      doD();
    });
  });
});

### 6. What are Promises? How do they solve callback hell?
A Promise represents the eventual completion or failure of an asynchronous operation.
It has three states: pending, fulfilled, and rejected.

Promises provide a better way to handle asynchronous tasks and avoid callback hell. They allow you to chain asynchronous operations without deep nesting.

- Avoid deep nesting
- Improve readability
- Better error handling using .catch()

### 7. What is async/await? How does it work internally?
Async/await is syntactic sugar built on top of promises that allows writing asynchronous code in a synchronous-looking manner.
Internally, async functions always return a promise, and await pauses the execution of the function until the promise is resolved or rejected.

async function fetchData() {
  const data = await getData();
  console.log(data);
};

This improves code readability and error handling using try-catch.

### 8. What is the difference between process.nextTick() and setImmediate()?
process.nextTick() schedules a callback to be executed immediately after the current operation completes, before the event loop continues.
setImmediate() schedules a callback to run in the check phase of the event loop, after I/O operations.

Key difference:

- process.nextTick() has higher priority
- Misuse of nextTick() can block the event loop

### 9. What are streams in Node.js? Name the types of streams.
treams are objects that allow reading or writing data in chunks instead of loading the entire data into memory.
They are used for handling large files and real-time data efficiently.

Types of streams:
- Readable
- Writable
- Duplex
- Transform

Example use-case:
- File streaming
- Video streaming
- Data processing pipelines

### 10. What is the Buffer class in Node.js?
The Buffer class is used to handle binary data directly in memory.
It is especially useful when working with streams, file systems, and network data.

const buffer = Buffer.from("Hello");

Buffers exist because JavaScript was originally designed to handle strings, not raw binary data.