### 1. What is Express.js? Why use it over plain Node.js?
Expressjs is a lightweight web framework built on top of Nodejs. It helps us build web applications and APIs faster by providing built-in features like routing, middleware support, and easier request and response handling.

If we use plain Nodejs, we need to write a lot of code manually to handle routes, parse requests, and manage errors. Express simplifies this process by providing ready-to-use methods.

I would prefer Express over plain Nodejs because it reduces development time, makes code more organized, and is easier to scale and maintain.

### 2. What is middleware in Express? Explain the middleware chain.
Middleware is a function that runs between the request and the response in Express. It can modify request data, perform validation, log information, or send responses.

The middleware chain means multiple middlware functions run in sequence. Each middlware must call next() to pass control to the next middleware.

app.use((req, res, next) => {
    console.log("Middleware 1);
    next();
});

If next() is not called, the request will stop there.

### 3. What are the different types of middleware (application-level, router-level, error-handling)?
There are mainly 5 types of middleware.
1. Application-level Middleware
Used globally across the app. These middleware function are attached to the entire app using app.use() or app.METHOD().

app.use((req, res, next) => {
  console.log("Application Middleware");
  next();
});

Used for logging, authentication, request parsing

2. Router-level Middleware
Used only for specific routes. These are similar to application middleware but applied only to specific routers.

const router = express.Router();

router.use((req, res, next) => {
  console.log("Router Middleware");
  next();
});


3. Error handling Middlware
Special middleware used to handle errors. It has 4 parameters.
(err, req, res, next)

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});


4. Built-in Middleware
Express provides built-in middlware functions.
Example:
- express.json()  Parses JSON data
- express.urlencoded()  Parses form data
- express.static()  Servers static files

app.use(express.json());


5. Third-party Middleware
Middleware created by external libraries.
Examples:

- morgan → Logging
- cors → Cross-origin requests
- multer → File uploads
- helmet → Security headers

const cors = require("cors");
app.use(cors());

"Express middleware is generally categorized into five types: application-level, router-level, error-handling, built-in middleware, and third-party middleware. However, most discussions focus on the first three because they describe how middleware is structured inside the application."

### 4. How does error handling work in Express?
Error handling in Express is done using special middleware functions that accept four parameters: (err, req, res, next).

When an error occurs, we pass it to next(error) and Express sends it to the error-handling middleware.

app.get("/", (req, res, next) => {
  next(new Error("Something went wrong"));
});
This keeps error handling centralized and makes debugging easier.

### 5. What is the difference between app.use() and app.all()?
app.use() is used to apply middleware to all HTTP methods and usually runs for every request.

app.all() is used to handle all HTTP methods for a specific route.

app.use((req, res, next) => {});
app.all("/users", (req, res) => {});

app.use() is mostly used for middleware, while app.all() is used for route handling.

### 6. Explain routing in Express. How do route parameters work?
Routing in Express defines how the server responds to client requests based on URL and HTTP method.

app.get("/users", (req, res) => {
  res.send("Users list");
});

Route parameters allow us to pass dynamic values in the URL.

app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});
If we call /users/5, the id will be 5.

### 7. What are route handlers vs middleware?
Route handlers are functions that handle specific routes and send responses.

Middleware functions run before route handlers and perform tasks like authentication, validation, or logging.

Example:
app.get("/users", middleware, handler);

Middleware prepares the request, and route handler sends the final response.

### 8. How do you handle file uploads in Express?
File uploads are usually handled using middleware like multer. It helps parse multipart form data and store uploaded files.

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded");
});

Multer allows us to control file storage and validation.

### 9. What is morgan? What logging strategies would you implement?
Morgan is a middleware used for logging HTTP requests in Express. It helps track requests, responses, and debugging.

const morgan = require("morgan");
app.use(morgan("dev"));

Logging strategies I would implement:
- Log request method and URL
- Log response status and time
- Log errors separately
- Use different logs for development and production

### 10. How would you structure a large Express application?
For large applications, proper folder structure is important for maintainability and scalability.

project
 ┣ controllers
 ┣ routes
 ┣ models
 ┣ middleware
 ┣ config
 ┣ services
 ┗ app.js

Routes handle endpoints
Controllers contain business logic
Models handle database operations
Middleware handles validation and authentication
Config stores environment settings

This structure helps separate concerns and keeps the project organized.