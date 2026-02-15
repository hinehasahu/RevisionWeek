### 1. What is MongoDB? What makes it different from relational databases?
MongoDB is a NoSQL database that stores data in the form of documents instead of tables like relational databases.

In relational databases like MySQL, data is stored in rows and columns, but in MongoDB, data is stored in flexible, JSON-like documents.

The main difference is that MongoDB is schema-flexible, which means we don't need to define a fixed structure before storing data.

Also, MongoDB supports horizontal scaling using sharding, which makes it suitable for large-scale applications.

For example, in MongoDB, we can store user data like this:
{
  name: "Ram",
  age: 25,
  email: "ram@gmail.com"
}

### 2. What are collections and documents in MongoDB?
In MongoDB, a collection is similar to a table in relational databases, and a document is similar to a row.

Collection is a group of related documents. (Contains multiple documents)
Document is a single record stored in JSON-like format.

Example: collection name: users and document is
{
    name: "Ram",
    age: 25
}

### 3. What is BSON? How does it differ from JSON?
BSON stands for Binary JSON. It is the format MongoDB uses to store data internally.

It is similar to JSON but store in binary format, which makes it faster to store and retrieve.

The main difference is that BSON supports more data types like Date, ObjectId, and Binary, while JSON supports limited data types.

Also, BSON is more efficient for database operations.

### 4. Explain the structure of a MongoDB document. What is _id?
MongoDB document is a JSON-like object that contains key-value pairs.
{
  _id: "123",
  name: "Ram",
  age: 25
}
The _id field is a unique identifier for each document.

MongoDB automatically creates this field if we don’t provide it.
It is used to uniquely identify each document.

It works like a primary key in relational databases.

### 5. What are the data types supported in MongoDB?
MongoDB supports many data types.
Some common ones are:
- String → "Ram"
- Number → 25
- Boolean → true or false
- Array → ["JavaScript", "Node"]
- Object → { city: "Delhi" }
- Date → new Date()
- ObjectId → unique id
- Null

Example:
{
  name: "Ram",
  age: 25,
  skills: ["JS", "Node"],
  active: true
}


### 6. What are embedded documents vs references in MongoDB?
Embedded document means storing related data inside the same document.
Example:

{
  name: "Ram",
  address: {
    city: "Delhi",
    pincode: 123456
  }
}

Reference means storing related data in separate documents and connecting using id.
Example:

User:
{
  _id: 1,
  name: "Ram"
}

Order:
{
  userId: 1,
  product: "Laptop"
}

### 7. When should you embed vs reference data?
We use embedded documents when data is small and frequently accessed together.

This improves performance.
For example, user profile and address.

We use references when data is large or shared.
For example, users and orders.
Because one user can have many orders.

### 8. What are the advantages and disadvantages of MongoDB?
Advantages:
- MongoDB is flexible because it does not require fixed schema.
- It is easy to scale horizontally.
- It provides high performance.
- It stores data in JSON-like format, which is easy to use in javascript.

Disadvantages:
- It does not support complex joins like SQL
- Data duplication can happen
- Transaction support is limited compared to SQL.

### 9. Explain schema design in MongoDB. Is MongoDB schema-less?
MongoDB is called schema-less, which means it does not require a fixed structure.

But in real applications, we still design schema properly to organize data efficiently.

Schema design means deciding:

- What data to store
- How to store
- Embed or reference
Good schema design improves performance.

So MongoDB is flexible, but schema design is still important.

### 10. What is the aggregation pipeline in MongoDB?
Aggregation pipeline is used to process and analyze data in MongoDB.

It is used for operations like:

- filtering
- grouping
- sorting
- calculating
It works in stages.

Example:

db.users.aggregate([
  { $match: { age: { $gt: 18 } } },
  { $group: { _id: "$city", total: { $sum: 1 } } }
])


This example groups users by city.
It is similar to GROUP BY in SQL.

Aggregation is very powerful and used for reporting and analytics.

### What is aggregation? When should we use it?
Aggregation in MongoDB is used to process data and get calculated or summarized results.

It means we take multiple documents and perform operations like filtering, grouping, counting, sorting, or calculating totals.

It works using something called an aggregation pipeline, where data passes through different stages and gets transformed step by step.

We use aggregation when we want reports or analysis from data.

For example, if I want to find:
- Total number of users in each city
- Average salary
- Total orders per user
I will use aggregation.

Example:

db.users.aggregate([
  { $group: { _id: "$city", totalUsers: { $sum: 1 } } }
])

This groups users by city and counts them.

So in simple words, aggregation is used when we want summarized or calculated results, not just raw data.

### Explain the difference between query and aggregation.
The main difference is that query is used to fetch simple data, while aggregation is used to process and analyze data.

Query is used for basic operations like finding, updating, or deleting documents.

Aggregation is used for complex operations like grouping, counting, calculating averages, and generating reports.

Example of Query:
db.users.find({ age: { $gt: 18 } })
This simply fetches users whose age is greater than 18.
It only retrieves data.

Example of Aggregation:
db.users.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } }
])
This calculates number of users in each city.
It processes data.

"Query is used to fetch documents, while aggregation is used to process documents and get summarized results like count, sum, or average."

Real-world example you can mention:
In an e-commerce application:

Query → Fetch all orders of a user

Aggregation → Calculate total sales of each product