### 1. What are the different types of queries in MongoDB?
In mongoDB, queries are used to perform different operations on data.
The main types of queries are:
- find query, which is used to fetch data.
db.users.find({ age: 25 })

- insert query, which is used to add data
db.users.insertOne({ name: "Ram", age: 25 })

- update query, which is used to modify the data.
db.users.updateOne({ name: "Ram" }, { $set: { age: 26 } })

- delete query, which is used to remove the data.
db.users.deleteOne({ name: "Ram" })

So mainly, we use queries to create, read, update, and delete data.

### 2. Explain projection in MongoDB queries.
Projection means selecting only specific fields from a document instead of fetching the whole document.
It improves performance because only required data is fetched.

db.users.find({}, { name: 1, age: 1 })

This will return only name and age, not other fields.
So projection helps reduce unnecessary data transfer.

### 3. What are comparison operators in MongoDB ($eq, $gt, $lt, $in, etc.)?
Comparison operators are used to compare values in queries.
Some common operators are:

- $eq → equal
- $gt → greater than
- $lt → less than
- $gte → greater than equal
- $lte → less than equal
- $in → match any value in array

db.users.find({ age: { $gt: 18 } })
This finds users with age greater than 18.

### 4. What are logical operators ($and, $or, $not)?
Logical operators are used to apply multiple conditions in a query.

Main logical operators are:
- $and → all conditions must be true
- $or → any condition must be true
- $not → reverse condition

db.users.find({
  $or: [
    { age: 25 },
    { city: "Delhi" }
  ]
})
This finds users with age 25 or city Delhi.

### 5. Explain update operators ($set, $unset, $inc, $push, $pull).
Update operators are used to modify specific fields.

- $set: { age: 30 } → used to update value
- $unset: { age: "" } → used to remove field
- $inc: { age: 1 } → used to increase value
- $push: { skills: "Node" } → used to add value in array
- $pull: { skills: "Node" } → used to remove value from array

### 6. What are indexes in MongoDB? What types of indexes exist?
Indexes are special data structures that improve search performance.
Without an index. MongoDB has to scan every document in the collection,, which is slow.
With an index, MongoDB can find data quickly, just like using an index in a book.

db.users.find({ email: "a@gmail.com" })
If email is indexed → fast
If not indexed → slow

Types of indexes in MongoDB:
1. Single Field Index: index on one field
db.users.createIndex({ email: 1 })

2. Compound index: index on multiple fields
db.users.createIndex({ name: 1, age: -1 })

3. Multikey Index: used for array fields. Automatically created when indexing a field that contains an array; it indexes each element of the array individually.
db.users.createIndex({ hobbies: 1 })

4. Text Index: supports full-text search queries on string content
db.users.createIndex({ description: "text" })

5. Unique Index: prevents duplicate values
db.users.createIndex({ email: 1 }, { unique: true })

6. TTL Index: (Time-To-Live) A special index used to automatically remove documents from a collection after a certain amount of time.

### 7. How do you create a compound index? What is index order?
A compound index is an index created on multiple fields of a collection. It is used when we frequently query using more than one field together. We create it using the createIndex() method.

db.users.createIndex({ name: 1, age: -1 }) 
Here, MongoDB creates an index on both name and age.

Index order: means the sequence in which the fields are defined in the index. In the above example, name is first and age is second.

This order is important because MongoDB can use this index querying by name alone or by both name and age, but it cannot efficiently use it if we query only by age.

Compound indexes improve performance for multi-field queries.

### 8. What is a covered query in MongoDB?
A covered query is a query in which all the required fields are present in the index, so MongoDB does not need to read the actual documents.
MongoDB returns the result directly from the index.
This makes the query very fast and efficient.

Example: If I create an index on name and age:
db.users.createIndex({ name: 1, age: 1 })
and run this query:
db.users.find({ name: "John" }, { name: 1, age: 1, _id: 0 })
MongoDB returns the result using only the index. This is called a covered query.

### 9. How do you analyze query performance? What is explain()?
We analyze query performance using the explain() method.
The explain() method shows how MongoDB executes the query.

It provides information like:
- whether an index is used
- number of documents scanned
- execution time
- query execution plan

db.users.find({ email: "test@gmail.com" }).explain("executionStats")
If it shows COLLSCAN, it means collection scan and no index is used, which is slow.
If it shows IXSCAN, it means index scan and the query is fast.

So explain() helps us optimize queries.

### 10. What are TTL indexes?
TTL stands for Time To Live.

A TTL index is used to automatically delete documents after a specified time.
It is useful for temporary data like OTPs, sessions, or logs.
We create it using createIndex() with expireAfterSeconds.

db.sessions.createIndex(
 { createdAt: 1 },
 { expireAfterSeconds: 3600 }
)

This will automatically delete documents after 1 hour.
This helps in automatic cleanup of old data.