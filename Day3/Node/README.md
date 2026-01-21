### 1. What is JWT (JSON Web Token)? Explain its structure (header, payload, signature).
JWT stands for Json Web Token. It is a compact and self-contained way to transmit information between a client and a server. it is mainly used for authentication and authorization in modern web applications and APIs.

A JWT consists of three parts separated by dots (.) 
#### Header.Payload.Signature
Header contains information about the type of token and the signing algorithm. { "alg": "HS256", "typ": "JWT" }
Payload contains the actual data, which is usually user information like user id, role, and token expiration time. These values are called claims.
Signature is created by combining the encoded header, payload and signing them with a secret key or private key. This signature ensures that the token is not modified.

### 2. How does JWT authentication work? Explain the flow.
In JWT authentication, the process starts when 
- the user logs in with valid credentials such as username and password. 
- The server verifies these credentials and, if they are correct, 
- generates a JWT containing user information and an expiration time.
- The server then sends this token back to the client. 
- The client stores the token and includes it in every subsequent request, usually in the Authorization header as a Bearer token.
- When the server receives a request, it extracts the token and verifies its signature and expiration. If the token is valid, the server trusts the user information inside the token and allows access to the protected resource. If the token is invalid or expired, the request is rejected.

This flow makes the system stateless because the server does not store session information.

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

### 3. What are the advantages and disadvantages of JWT over sessions?
One major advantage of JWT is that
- It is stateless, which means the server does not need to store session data. This makes JWT scalable and suitable for distributed systems and microservices. 
- Easy to use with APIs, mobile apps, and single-page applications.
- Faster authentication

However, JWT also has disadvantages
- Once a JWT issued, it cannot be easily revoked 
- token size is larger
- If a token is compromised, it remains valid until it expires.

In comparison, sessions are easier to invalidate but require server-side storage.

### 4. Where should you store JWTs in the client? (localStorage vs cookies vs memory)
JWTs can be stored in localstorage, cookies, or memory, but each option has trade-offs.
- Storing JWTs in localstorage is simple, but it is vulnerable to XSS attacks because Javascript can access it.
- Storing JWTs in cookies is generally safer when HttpOnly and secure attributes are used, because javascript cannot read them. This helps protect against XSS.
- Storing JWTs in memory is the safest against XSS, but the token is lost when page refresh.

In real applications, access tokens are stored in memory and refresh tokens are stored in secure HttpOnly cookies.

### 5. What is the difference between access tokens and refresh tokens?
Access tokens are short-lived tokens used to access protected resources. They are sent with every API request and usually expire quickly for security reasons.

Refresh tokens are long-lived tokens used to obtain new access tokens wihtout forcing the user to log in again. Thay are stored more securely and are only sent to a refresh endpoint.

This separation improves the security by limiting the exposure of access tokens.

### 6. How do you handle JWT expiration and refresh?
JWT expiration is handled by setting an expiry time when the token is created. When an access token expires, the client sends the refresh token to a dedicated endpoint. The server validates the refresh token and issues a new access token.

If the refresh token is also expired or invalid, the user is required to log in again. This approach provides a balance between security and user experience.

### 7. What is Role-Based Access Control (RBAC)?
Role-Based Access Control is an authorization strategy where access to resources is based on user roles. Instead of checking individual permissions for every user, users are assigned roles such as admin, manager, or user.

Each role has predefined permissions. This makes authorization easier to manage and scale, especially in large applications.

### 8. How would you implement authorization in an API?
To implement authorization in an API, I would first authenticate the user using JWT. After authentication, I would include user roles or permissions inside the token payload.

For each protected route, I would add middleware that checks whether the authenticated user has the required role or permission to access that route. If the user is authorized, the request proceeds. Otherwise, the server returns a forbidden response.

This ensures that users can only access resources they are allowed to.
