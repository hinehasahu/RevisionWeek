### 1. What is the aggregation framework in MongoDB?
The aggregation framework in MongoDB is used to process and analyze data and return calculated results.
It works like a pipeline where documents pass through different stages and get transformed.

We use aggregation for operations like:
- filtering data
- grouping data
- calculating totals
- finding averages

It is mainly used for reporting and data analysis.

db.orders.aggregate([...])

### 2. Explain the stages in aggregation pipeline ($match, $group, $project, $sort, $limit).
Aggregation pipeline has multiple stages. Each stage performs a specific operation.
Main stages are:

- $match: used to filter documents.
{ $match: { status: "completed" } }

- $group: Used to group documents and perform calculations like sum or count.
{ $group: { _id: "$customerId", total: { $sum: "$amount" } } }

- $project: used to select specific fields.
{ $project: { name: 1, amount: 1 } }

- $sort: used to sort documents.
{ $sort: { amount: -1 } }

- $limit: used to limit number of documents.
{ $limit: 5 }

### 3. What is $lookup? How do you perform joins in MongoDB?
$lookup is used to join data from another collection.
It is similar to JOIN in SQL.
{
 $lookup: {
   from: "orders",
   localField: "_id",
   foreignField: "userId",
   as: "orders"
 }
}
This joins users with their orders.
We use $lookup when data is stored in different collections.


### 4. What is $unwind? When would you use it?
$unwind is used to break array elements into separate documents.
If one document has an array, unwind creates multiple documents.

Example: 
Before: { name: "John", skills: ["JS", "React"] }
After unwind: 
{ name: "John", skills: "JS" }
{ name: "John", skills: "React" }

We use $unwind when working with arrays.

### 5. What are aggregation expressions and operators?
Aggregation expressions and operators are used to perform calculations and transformations on data inside the aggregation pipeline.
They help us do operations like sum, average, count, and modify fields.

Example: Suppose I have order data and I want to calculate total sales.

db.orders.aggregate([
 {
   $group: {
     _id: null,
     totalSales: { $sum: "$amount" }
   }
 }
])
Here:
- $group is the stage
- $sum is the aggregation operator

Some common operators are:
- $sum → adds values
- $avg → finds average
- $max → maximum value
- $min → minimum value

So in simple words, aggregation operators help us analyze and calculate data.


### 6. How do you handle one-to-many relationships in MongoDB?
One-to-many relationship means one document is related to multiple documents.

for example: One user can have many orders. In MongoDB, we handle this in two ways:

Method 1: Embedding
We store orders inside the user document.

{
 name: "John",
 orders: [
   { product: "Laptop" },
   { product: "Phone" }
 ]
}
This is good when data is small and always used together.

Method 2: Referencing (Most common)
We store orders in separate collection and link using userId.

User: { _id: 1, name: "John" }
Order: { product: "Laptop", userId: 1 }
This is better when data is large.

So embedding is used for small data, and referencing is used for large data.

### 7. How do you handle many-to-many relationships in MongoDB?
Many-to-Many relationship means many documents relate to many documents.

Example: Students and Courses
One student can join many courses and one course can have many students.
In MongoDB, we handle this using referencing.

Student document:
{
 name: "John",
 courseIds: [101, 102]
}

Course document:
{
 _id: 101,
 name: "Math"
}

Here, we store course IDs inside student.
This creates relationship. This is the most common way to handle many-to-many.

### 8. What is data modeling in MongoDB? Explain the 6 rules of thumb.
Data modeling means designing how data will be stored in the database.
Good data modeling improves performance and makes queries faster.

Rules of thumb in MongoDB are best practices for schema design and data modeling, focusing on optimizing performance base on data access patters.
MongoDB provides some rules of thumb.

Rule 1: Embed data when it is used together
If two pieces of data are always fetched together, we should embed them.

Example: User and Address

{
 name: "John",
 address: {
   city: "Delhi",
   pincode: 123456
 }
}

Because whenever we fetch user, we also need address.
This improves performance.

Rule 2: Use reference when data is large
If embedded data becomes too large, we should use reference.

Example: User and Orders
Instead of embedding thousands of orders inside user, we store orders separately.
Because large documents reduce performance.

Rule 3: Avoid very large documents
MongoDB document size limit is 16MB.

Very large documents:
• slow down queries
• use more memory
So keep documents small.

Rule 4: Design schema based on application queries
We design database based on how application reads data. Not like traditional relational database.

Because MongoDB is query-based design.

Rule 5: Avoid joins when possible
MongoDB does not prefer joins like SQL.
Embedding reduces joins and improves speed.

Rule 6: Optimize for read performance
MongoDB is mostly used in read-heavy applications.
So schema should be designed for fast reading.

Embedding helps achieve this.

### 9. What are atomic operations in MongoDB?
Atomic operation means the operation will either fully complete or not happen at all.
MongoDB operation on a single document are atomic by default.
This means partial update cannot happen.
db.users.updateOne(
 { name: "John" },
 { $set: { age: 25 } }
)
This will either update age completely or not update at all.

This ensures data consistency.

### 10. What is a transaction in MongoDB? When should you use it?
Transaction is used when we want to perform multiple database operations safely.
In transaction, either all operations succeed or all fail.

Example: Bank transfer:
Step 1: deduct money
Step 2: add money
Both must happen. If one fails, everything is rolled back.

We use transactions in situations like:
- Banking systems
- Payment systems
- Updating multiple collections
This ensures data remains correct.

"MongoDB operations are atomic at document level, and for multiple documents we use transactions."