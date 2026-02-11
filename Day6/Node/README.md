### 1. What are core modules in Node.js? Name at least 10.
Core modules in Nodejs are built-in modules that come with Nodjs installation, so we do not need to install them separately using npm. They help us perform common tasks like working with files, handling events, managing servers, and handling paths.

Some commonly used core modules are:
- fs: used for file system
- path: used for handling paths
- http: used to create servers
- https: used to secure servers
- events: used for event handling
- os: used to provide operating system information
- url: helps in parsing URLs
- crypto: used for encryption and hashing
- stream: used for handling streaming data
- util: provides utility functions
- cluster: used to run multiple processes
- child_process: used to create child processes

### 2. Explain the 'fs' module. What's the difference between fs and fs/promises?
The fs module is used to work with the file system in Nodejs. It allows us to create, read, write, and delete files. It also allows us to create folders and manage directories.

const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
    console.log(data)
})

Difference between fs and fs/promises
The normal fs module mostly uses callbacks for asynchronous operations. The fs/promises module uses promises and works better with async/await, which makes code cleaner and easier to read.

const fs = require("fs");

async function readFile() {
    const data = await fs.readFile("test.txt", "utf8");
    console.log(data)
}

### 3. What is the 'path' module used for?
The path module is used to work with file and folder paths. It helps us join paths, extract file names, and resolve absolute paths. It also makes our code work correctly on different operating systems.

const path = require("path");

const filePath = path.join("folder", "file.txt");
console.log(filePath);

It helps avoid manual string concatenation when creating file paths.

### 4. Explain the EventEmitter class. How do you use it?
EventEmitter is a class from the events module that allows us to create and handle custom events in Nodejs. It follows event-driven programming where one part of the application emits an event and another part listens to it.

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello User);
})
emitter.emit("greet")

Here, on() listens to an event and emit() triggers it.

### 5. What is the difference between on() and once() in EventEmitter?
Both methods are used to listen to events.
- on() listens to the event every time it is triggered.
- once() listens only the first time and then automatically removes the listener.

emitter.on("event", () => console.log("Runs every time.))
emitter.once("event", () => console.log("Runs only once.))

### 6. How does error handling work with EventEmitters?
In EventEmitter, errors are handled using the "error" event. If an error event is emitted and on listener is attached, the application may crash.

emitter.on("error", (err) => {
  console.log("Error occurred:", err.message);
});

emitter.emit("error", new Error("Something went wrong"));

It is considered good practice to always handle error events.

### 7. What is the 'cluster' module? Why would you use it?
The cluster module allows Nodejs to create multiple instances of an application so it can use multiple CPU cores. Since Nodejs is single-threaded, cluster helps improve performance by running multiple workers processes.

It is mainly used when building high-traffic server application.

### 8. What are child processes? When would you spawn one?
Child processes allow Nodejs to run separate processes outside the main application. This is useful when performing heavy tasks like running system commands or processing large data without blocking the main thread.

We spawn child processes when:
- Running shell commands
- Performing CPU-heavy tasks
- Running backgound jobs

### 9. What is the difference between spawn, exec, and fork?
These are methods from the child_process module used to create child processes.

spawn()
- Used for running long-running processes
- Streams data gradually
- More memory efficient

exec()
- Runs commands and returns output as a complete buffer
- Suitable for small outputs

fork()
- Used specifically to create new Nodejs processes
- Allows communication between parent and child using messaging

const { exec } = require("child_process");

exec("dir", (err, stdout) => {
    console.log(stdout);
});
