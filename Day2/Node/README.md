### 1. What is HTTPS? How does it differ from HTTP?
HTTP stands for HyperText Transfer Protocol. It is a protocol used to transfer data between client (browser) and a server. 
The problem with HTTP is that the data is sent in plain text, which means anyone who intercepts the network traffic can read or modify the data.

HTTPS (HTTP Secure) is a secure version of HTTP. It uses SSL/TLS encryption to protect data during transmission.

HTTP                            HTTPS
Data is not encrypted           Data is encrypted
Less secure                     More secure
Uses port 80                    Uses port 443

In Short: 
HTTP: passwords can be stolen using network sniffing
HTTPS: passwords are encrypted and safe.

### 2. Explain SSL/TLS. What is the SSL handshake process?
SSL stands for Secure Sockets Layer and TLS stands for Transport Layer Security. Both are security protocols that encrypt data sent between client and a server.
TLS is the newer and more secure version of SSL while the term SSL is still commonly used.

SSL/TLS Handshake Process:
1. Browser requests a secure connection
2. Server sends its SSL certificate
3. Browser verifies the certificate with a trusted Certificate Authority (CA)
4. Encryption keys are exchanged (Client creates a session key and encrypts it using server's public key.)
5. Secure communication starts from both sides

Why Handshake is important?
- Prevents fake servers
- Establishes secure keys
- Protects against man-in-the-middle attacks

### 3. What is encryption? Explain symmetric vs asymmetric encryption.
Encryption is the process of converting readable (plainText) data into unreadable (CipherText) form, so that only authorized parties can access it.

Symmetric Encryption:
- Uses one shared key
- the same key encrypts and decrypts the data
- Very fast and efficient
Use case: Encrypting large amounts of data after connection is established

Asymmetric Encryption:
- Uses two keys
  - Public key -> encrypt
  - Private key -> decrypt
- More secure but slower
Use case: Secure key exchange

HTTPS uses both, Asymmetric -> handshake and Symmetric -> Data transfer

### 4. What are certificates? What is a Certificate Authority (CA)?
A digital certificate is an electronic document that proves a website is genuine. It binds a public key to a domain name.

Certificate Contains:
- Domain name
- Public Key
- Issuer details(CA)
- Expiry date

Why Certificates Matter
- Prevets fake websites
- Enable HTTPS
- Build trust between client and server

Common CAs:
- Let's Encrypt ("https://letsencrypt.org/")
- DigiCert ("https://www.digicert.com/")
- GlobalSign ("https://www.globalsign.com/en")

### 5. What is the difference between authentication and authorization?
Authentication and Authorization are two different security steps. 
Authentication is the process of verifying the identity of a user.
- Confirms who the user is
- Based on credentials
- Happens first
- Without authentication, authorizatio cannot happen

Authorization is the process of deciding what an authenticated user is allowed to access or perform.
- Confirms what the user can or cannot do
- based on roles or permissions
- Happens after authentication
- Controls access to resources (Admin can delete users, normal users cannot)

### 6. Explain session-based authentication. How do sessions work?
Session-based authentication stores user login information on the server.

How it works
- When a user logs in
- The server creates a session and stores it on the server.
- A unique session ID is sent to the client as (http-only) cookie
- On every request, the browser sends this cookie
- and the server validates the session ID to authenticate the user

Advantages                            Disadvantages
- Easy to implement                   - Uses server memory
- Secure if configured correctly      - Hard to scale horizontally

### 7. What are cookies? What are the security attributes of cookies (HttpOnly, Secure, SameSite)?
Cookies are small pieces of data stores in the user's browser. 

How it works
- When a request is made to the same website
- The browser automatically sends the cookie along with the request
- This helps server remember the information like login sessions, authentication status, and user preferences.

Cookies have security attributes that control how and when they are sent.
Cookie Security Attributes
- HttpOnly: blocks javascript access to cookies, reducing the risk of XSS (Cross-site Scrptig)
- Secure: ensures the cookies sent only over HTTPS, prevents network sniffing
- SameSite: limits cross-site cookie sharing, which helps prevent CSRF (Cross-site Request Forgery) attacks

### 8. What is token-based authentication? How does it differ from session-based auth?
Token-based authentication uses a token (usually JWT) instead of server sessions.

How it works
- When user logs in with their credentials
- Server verifies the credentials and creates a token (JWT) containing user information and signs it
- Client stores the token in localStorage, or cookies, or memory (recommended for security)
- Token sent in authorization header for each request to prove authentication
- Server validates the token

Comparison between Token-based and Session-based authentication
1. Session-based are stateful because server stores the session data, while Token-based are stateless because server stores nothing

2. Session-based auth stores session on the server. Token-based auth stores token on client

3. Session-based is hard to scale, Token-based is easy to scale

4. Session-based is commonly used in traditional web apps, Token-based is commonly used in REST APIs, mobile apps
