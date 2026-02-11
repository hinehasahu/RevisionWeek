### 1. What is CORS? Why does it exist?
CORS - Cross-Origin Resource Sharing
- Cross → different
- Origin → combination of protocol + domain + port
- Resource → data (API response)
- Sharing → allowing access
It is a browser security feature that controls how a website running on one origin (domain, protocol, or port) can request resources from a different origin.
A webpage on app.com uses JavaScript to fetch user data from api.example.com. CORS headers on api.example.com must explicitly allow requests from app.com for the browser to permit the data transfer. 

Without CORS:
- Any website could call your API
- Steal user data
- Perform malicious actions
- CORS exists to protect users, not servers.

Why it exists
- Security: Prevents malicious websites from making unauthorized requests to other sites on your behalf (e.g., stealing data from your bank).
- Integration: Enables modern web applications to fetch data from third-party APIs (like weather, maps, fonts) from different domains, making apps more powerful and flexible. 

#### Origin is a combination of ( protocol + domain + port )

### 2. Explain the Same-Origin Policy.
The Same-Origin Policy is a fundamental web browser security feature that says A webpage can only access resources from the same origin. 
It prevents Data theft, session hijacking and malicious sites from reading sensitive data (like cookies, session info)
Example:
Allowed
frontend: http://example.com
API:      http://example.com/api
 
Blocked
frontend: http://example.com
API:      http://api.example.com

Even though both are from the same company, origins differ.

### 3. What are preflight requests? When do they occur?
A preflight request is a "safety check" performed by a web browser to ask a server for permission before sending the real, potentially dangerous request. 
Preflight requests happen automatically when a script (like JavaScript in fetch() or XMLHttpRequest) tries to make a cross-origin request (a request to a different domain, protocol, or port) that is deemed ("non-simple" or "complex"). 
They specifically occur when 
- we use methods like PUT, PATCH, DELETE
- we added custom headers (e.g., Authorization: Bearer <token> )
- You are sending JSON data, usually Content-Type: application/json. 

### 4. How do you configure CORS in Express?
In Express, I configure CORS to control which frontend applications are allowed to access my backend APIs.
CORS is required because browsers follow the Same-Origin Policy, which blocks requests coming from different origins.
By enabling CORS in Express, I explicitly tell the browser that requests from specific origins are safe.

In practice, I usually use the cors middleware provided by Express.

Example:

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

Here:
- origin specifies which frontend is allowed
- credentials: true allows cookies or authentication headers

This setup is commonly used in MERN applications where the frontend and backend run on different ports.

### 5. What is CSRF (Cross-Site Request Forgery)? How do you prevent it?
CSRF is a security attack where a malicious website tricks a logged-in user’s browser into sending an unwanted request to another website.
The attack works because browsers automatically include cookies with every request, even if the request comes from a different site.

Example scenario:
- User is logged into a bank website
- Malicious site sends a hidden request like “transfer money”
- Browser sends cookies automatically
- Action happens without user’s knowledge

Prevention techniques:
- Use CSRF tokens to verify genuine requests
- Set cookies with SameSite=Strict
- Prefer JWT-based authentication instead of cookie-based auth for APIs

### 6. What is XSS (Cross-Site Scripting)? How do you prevent it?
XSS is an attack where an attacker injects malicious JavaScript code into a web application, which then runs in the user’s browser.
This can lead to data theft, session hijacking, or redirecting users to malicious sites.

Example attack:

<script>alert("Hacked")</script>

If this input is rendered directly, the script executes.

Prevention methods:
- Always sanitize and escape user input
- Use frameworks like React, which escape values by default
- Use security middleware like Helmet
- Apply Content Security Policy (CSP)

### 7. What is SQL Injection? How do you prevent it?
SQL Injection is a database attack where an attacker inserts malicious SQL queries through user input fields.
If input is directly concatenated into a query, the attacker can read, modify, or delete database data.

Vulnerable example:

SELECT * FROM users WHERE email = '' OR '1'='1';

This query always returns true.

Prevention techniques:
- Use prepared statements / parameterized queries
- Use ORMs like Sequelize or Mongoose
- Validate and sanitize user input
- Restrict database user permissions

### 8. What are rate limiting and throttling? Why are they important?
Rate limiting and throttling are techniques used to control how many requests a user can make to a server.
They protect applications from abuse, brute-force attacks, and denial-of-service attacks.

Rate Limiting:
- Blocks requests after a fixed limit
- Example: 100 requests per 15 minutes

Throttling:
- Slows down requests instead of blocking completely

Why they are important:
- Prevent brute-force login attacks
- Reduce server overload
- Improve application stability

Express example:

const rateLimit = require("express-rate-limit");

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

### 9. What is the principle of least privilege?
The principle of least privilege means giving users, services, or applications only the minimum level of access required to perform their tasks.
This reduces security risks and limits damage if an account is compromised.

Example:
- A normal user can read data
- An admin can modify data
- Only the database service can access database credentials

Why it is important:
- Reduces attack surface
- Prevents accidental damage
- Improves overall system security
