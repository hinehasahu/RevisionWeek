## 1. What is HTTP and how does it work? Explain the request-response cycle.
HTTP stands for HyperText Transfer Protocol. It’s the set of rules that allows a client, like a browser or mobile app, to communicate with a server.

In simple terms, it works on a request–response cycle.
The client sends a request to the server (for example, “get me this page”), the server processes it, and then sends back a response with a status code and data.

e.g: When you open a website, your browser sends a GET request, and the server responds with HTML, CSS, or JSON data.

## 2. What are the different HTTP methods (GET, POST, PUT, PATCH, DELETE) and when should each be used?
GET – Used to fetch data and doesn't change anything on the server
Example: GET /users

POST – Used to create new data
Example: POST /users (create a new user)

PUT – Used to update an entire data (replaces old data completely)
Example: PUT /users/1

PATCH – Used to update only part of a data / for partial updates
Example: PATCH /users/1 (update only email)

DELETE – Used to remove data
Example: DELETE /users/1

Each method clearly represents the intent of the operation.

### 3. Explain HTTP status codes. What's the difference between 2xx, 3xx, 4xx, and 5xx?
HTTP status codes tell us what happened to the request. 
2XX – Success
Example: 200 OK (data fetched), 201 Created (new resource created)

3xx – Redirection (client must go somewhere else)
Example: 301 Moved Permanently

4xx – Client errors (Problem is in the request sent by the client)
Example: 400 Bad Request (invalid data), 401 Unauthorized (not logged in), 403 Forbidden (no permission) 404 Not Found (resource doesn't exist)

5xx – Server errors (server failed to process a valid request)
Example: 500 Internal Server Error

So basically, 4xx means “something wrong with the request”, and 5xx means “something broke on the server.”

### 4. What are HTTP headers? Name some important request and response headers.
HTTP headers are metadata sent with requests and responses that control behavior, security, caching, and data format.
#### Important request headers:
- Authorization – authentication token
- Content-Type – format of request body (JSON, form-data)
- Accept – expected response format

#### Important response headers:
- Content-Type
- Set-Cookie
- Cache-Control
- Access-Control-Allow-Origin

Headers play a major role in security, performance, and cross-origin communication.

### 5. What is the difference between stateless and stateful protocols? Is HTTP stateless?
A stateless protocol means the server does not remember previous requests.
Each request is treated as a new, independent request.

A stateful protocol remembers client information across requests.

HTTP is stateless by default, which allows: Better scalability, simple server architecture 
That’s why we use cookies, sessions, or JWT tokens to maintain user login state.

### 6. Explain idempotency in REST APIs. Which HTTP methods are idempotent?
An API is idempotent if making the same request multiple times produces the same result.
Idempotent methods: GET, PUT, DELETE
Not Idempotent: POST (because each call usually creates a new resource) eg. Deleting a user multiple times still results in “user deleted” — the final state is the same.

### 7. What is REST? What are the principles of RESTful API design?
REST (Representational State Transfer) is an architectural style that uses HTTP to design scalable and maintainable APIs.
#### Core idea:
- Everything is treated as a resource
- Each resource has a URL
- Use proper HTTP methods

#### REST principles:
- Client–server separation
- Stateless communication
- Resource-based URLs
- Use HTTP methods properly
- Consistent responses

Example REST API
GET /products
POST /products
GET /products/3
DELETE /products/3

### 8. How would you version a REST API? What are the different approaches?
