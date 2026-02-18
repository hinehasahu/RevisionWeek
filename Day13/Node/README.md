### 1. What are the types of errors in Node.js?
In Nodejs, there are mainly four types of errors:

1. Syntax Errors
These occur when code is written incorrectly.
Example: console.log("Hello"  Missing bracket causes syntax error.

2. Runtime Errors
These occur while program is running.
Example: console.log(x) If x is not defined, it gives runtime error.

3. Logical Errors
Code runs but gives wrong output.
Example: console.log(10 - 5)  // 15  (logical mistake)

4. Asynchronous Errors
These happen inside async operations.
Example: 
fs.readFile("file.txt", (err, data) => {
 if (err) throw err;
});

So, nodejs errors can be syntax, runtime, logical, and asynchronous errors.

### 2. How do you handle errors in synchronous vs asynchronous code?
In synchronous code, I handle errors using try-catch blocks. The try block contains the risky code, and the catch block handles the error.

try {
  JSON.parse("invalid");
} catch(err) {
  console.log(err.message);
}

In asynchronous code, try-catch does not work directly with callbacks, so we handle errors using...
- callback error parameters
fs.readFile("file.txt", (err, data) => {
 if (err) console.log(err);
});

- .catch() in promises
fetchData()
 .catch(err => console.log(err));

- or try-catch with async await
try {
 await fetchData();
} catch(err) {
 console.log(err);
}


### 3. What is the try-catch block? When should you use it?
Try-catch is used to handle errors in synchronous code. The try block contains code that may cause error, and the catch block handles that error so the program does not crash.

I mainly use try-catch when working with JSON parsing, async-await, or any operation that may fail.

try {
  let data = JSON.parse(jsonString);
} catch(err) {
  console.log(err.message);
}


### 4. How do you handle unhandled promise rejections?
Unhandled promise rejection happens when a promise fails and we don not handle it using catch.
To handle it, I use .catch() method in promises.

fetchData().catch(err => console.log(err));

In Node.js, I can also use the global handler:

process.on("unhandledRejection", err => {
  console.log(err);
});

This prevents application crashes.


### 5. What are operational errors vs programmer errors?
Operational errors are expected errors that happen during normal application operation, like database connection failure or invalid user input. These should be handled properly.

Programmer errors are bugs in the code, like syntax errors or undefined variables. These should be fixed, not handled.

So in simple words, operational errors are expected, and programmer errors are coding mistakes.

### 6. How would you implement centralized error handling in Express?
Centralized error handling means handling all errors in one place.
In Express, I implement centralized error handling using error-handling middleware. This middleware has four parameters: err, req, res, and next.

When an error occurs, I pass it using next(err), and Express sends it to the error middleware, which sends a proper response.

app.use((err, req, res, next) => {

 res.status(500).json({
  message: err.message
 });

});


This improves:
• maintenance
• code cleanliness

### 7. What is input validation? Why is it important?
Input validation means checking user input before processing it.

For example: checking if email is valid or password is not empty.

Checking email format.

It is important because:
• prevents invalid data
• improves security
• protects the application from attacks

It also ensures correct data is stored in the database.

Example:

if(!email){
 return res.send("Email required");
}

### 8. What libraries can you use for validation (Joi, express-validator, etc.)?
Some commonly used validation libraries in Nodejs and Express are: Joi and express-validator

1. Joi: Used for schema validation

Example: Joi.string().email()

2. express-validator: Used as middleware in Express applications.

Example: check("email").isEmail()

These libraries make validation easier and cleaner.

### 9. How do you sanitize user input?
Sanitizing user input means cleaning user input to remove harmful data.

For example, removing spaces or special characters.

Example: req.body.name.trim()

This helps prevent security attacks like:
• SQL injection
• XSS attacks

Libraries used:
• express-validator
• validator.js

### 10. What is the difference between client-side and server-side validation?
Client-side validation happens in the browser using Javascript. It improves user experience because it gives instant feedback.

Example: Required field validation.

Server-side validation happens in the backend. It is more secure because client-side validation can be bypassed.
So even if client-side validation exists, server-side validation is always required for security.

Example: Checking email in database.

Difference:

Client side:
• fast
• improves user experience

Server side:
• more secure
• must always be used


"In my projects, I use proper validation and centralized error handling to make the application secure and reliable."

