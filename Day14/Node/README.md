### 1. What is the difference between HTTP and WebSocket?
HTTP is a request-response protocol, which means the client sends a request and the server sends a response, and then the connection is closed. Every time the client needs new data, it has to send a new request.

Websocket, on the other hand, is a persistent, full-duplex connection. This means once the connection is established, both client and server can send data to each other anytime without creating a new connection.

For example, in HTTP, if I want to check new notifications, the browser has to request the server again and again. But in WebSocket, the server can directly send new notification to the client instantly.

So in simple words, HTTP is request-based, and WebSocket is real-time and continuos.

### 2. When would you use WebSockets over HTTP?
I would use WebSockets when I need real-time communication between client and server.

For example: 
• Chat applications like WhatsApp
• Live stock price updates
• Real-time notifications
• Online multiplayer games

In these applications, data changes frequently, and the server needs to push updates instantly.

If I use HTTP, the client would need to request repeatedly, which is inefficient. WebSocket solves this by keeping the connection open.

### 3. How does WebSocket connection work? Explain the handshake.
WebSocket connection starts with an HTTP handshake.
First, the client sends an HTTP request to the server with an "Upgrade" header asking to switch to WebSocket.

Example
Upgrade: websocket
Connection: Upgrade

Then the server accepts the request and responds with status code 101 Switching Protocols.

After that, the HTTP connection is upgraded to WebSocket connection.
Once the connection is established, both client and server can send messages freely.

In simple words, WebSocket starts as HTTP and then upgrades to a persistent connection.

### 4. What is Socket.io? How does it differ from native WebSockets?
Socket.io is a Javascript library that makes real-time communication easier.
It is built on top of WebSockets but provides additional features.
Native WebSocket only provides basic communication, but Socket.io provides:

• Automatic reconnection
• Fallback support (like polling if WebSocket fails)
• Rooms and namespaces
• Easier event handling

socket.on("message", () => {})
So Socket.io is easier and more powerful than native WebSocket.

### 5. What are rooms and namespaces in Socket.io?
Rooms and namespaces are used to organize connections.
Room means a group of users.

For example, in a chat app, users in the same chat room will receive the same messages.

Example: socket.join("room1");

Namespace is used to create separate communication channels.

Example: io.of("/admin")

So namespace separates applications, and rooms separate users inside that application.

### 6. How do you handle authentication with WebSockets?
Authentication is usually done using tokens, like JWT. The client sends the token during connection.

Example:

io.use((socket, next) => {

 const token = socket.handshake.auth.token;

});

Then the server verifies the token.
If valid, connection is allowed.
If invalid, connection is rejected.
This ensures only authorized users can connect.


### 7. What are the challenges of scaling WebSocket applications?
There are several challenges when scaling WebSocket applications.

First is handling many concurrent connections, because each user keeps a persistent connection open.

Second is load balancing. If multiple servers exist, messages need to reach the correct user.

Third is memory usage, because each connection consumes server memory.

To solve this, tools like Redis are used to share data between servers.

### 8. What is Server-Sent Events (SSE)? How does it differ from WebSocket?
Server-Sent Events allow the server to send data to the client continuously.
But SSE is one-way communication.
Server can send data, but client cannot send data back.

WebSocket supports two-way communication.

Example use case of SSE: Live news updates.

So difference is:

SSE → one way
WebSocket → two way

### 9. What is long polling? How does it work?
Long polling is a technique where the client sends a request to the server, and the server holds the request open until new data is available.

Once data is available, server responds, and the client immediately sends another request.

This creates a near real-time effect.

Example:

Chat application before WebSockets.
But it is less efficient than WebSocket.

### 10. How would you implement a real-time notification system?
To implement real-time notifications, I would use Socket.io.

First, I establish a socket connection between client and server.

Then, when an event happens, like a new message, the server emits an event.

Example: Server: io.emit("notification", "New message received");

Client:

socket.on("notification", (data) => {

 console.log(data);

});

This allows the client to receive notification instantly.

This is commonly used in social media applications.