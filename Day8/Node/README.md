### 1. What is a database? What are the types of databases?
A database is a structured place where data is stored, managed, and retrived efficiently. It helps applications store large amounts of information in an organized way so that data can be accessed, updated, or deleted easily.

There are mainly two types of databases:
- SQL Databases (Relational Database)
  - Stored data in tables with rows and columns
  - Example: MySQL, PostgreSQL, Oracle

- NoSQL Databases (Non-Relational Databases)
  - Stored data in flexible formats like documents, key-value pairs, graphs, etc.
  - Example: MongoDB, Redis, Cassandra

### 2. What is the difference between SQL and NoSQL databases?
SQL Databases are relational databases that store data in structured tables with fixed schemas. They use SQL language to query data and maintain strong relationships between tables.

NoSQL databases store data in flexible formats like JSON documents or key-value pairs. They do not require fixed schemas and are designed to handle large and rapidly changing data.

SQL focuses more on consistency and relationships, while NoSQL focuses more on scalability and flexibility.

### 3. When would you choose SQL over NoSQL and vice versa?
I would choose SQL when:
- Data structure is fixed
- Relationships between data are important
- Strong consistency is required
Example: Banking or Payment systems

I would choose NoSQL when:
- Data structure changes frequently
- Need to handle large-scale or real-time data
- High performance and scalability are required
Example: Social media apps or chat applications

### 4. What is ACID in databases? Explain each property.
Atomicity  Consistency  Isolation  Durability

Atomicity: A transaction is completed fully or not at all. if one step fails, the entire transaction is rolled back.
Example: transferring 100₹ from A to B. If one fails both should fail

Consistency: The database must always remains in a valid state before and after the transaction.
Example: Balance cannot be negative (balance: -500), rules must always be followed.

Isolation: Multiple transactions run independently without affecting each other.
Example: Two users booking the last movie ticket only one should get it. Other must fail

Durability: Once data is stored, it remains stored even if the system crashes.
Example: If system crashes after payment, data is not lost.


Note: While SQL databases strongly focus on ACID, some NoSQL databases prefer the BASE model for higher performance and scalability.

### 5. What is BASE in NoSQL databases?
Basically Available  Soft State  Eventual Consistency

Base is a model used by NoSQL databases that focuses on high availability and scalability.

Basically Available (BA): The system guarantees it will work and respond to requests, even if some parts of the database fail.

Soft State (S): the data may change over time without user interaction, and the system does not need to be consistent all the time.

Eventual Consistency (E): The data will eventually be the same across all nodes, but not immediately.


ACID (Strict): If a book is checked out at Branch A, no one in Branch B can see it until the system updates everywhere instantly.

BASE (Flexible): If a book is checked out at Branch A, someone at Branch B might still see it as "available" for a few seconds or minutes, but the system will fix this "eventually". 

### 6. What is database normalization? Explain 1NF, 2NF, 3NF.
Database normalization is the process of organizing database tables to reduce redundancy and improve data consistency.

1st Normal Form (1NF)
Each column must contain only one, atomic (individual) value. No repeating groups or comma-separated lists.
Example
Bad: User(ID, Name, Phone) 
 1, John, 555-1234, 555-5678 (Two phones in one cell).
1NF: 1, John, 555-1234 and 1, John, 55                      5-5678 (Two separate rows).  

2nd Normal Form (2NF)
Must be in 1NF, and all non-key columns must fully depend on the entire primary key. This matters most when a table has a composite key (key made of two or more columns).
Example
1NF Table: (StudentID, CourseID, StudentName, CourseFee)
Problem: StudentName only depends on StudentID, not CourseID. This is a partial dependency.
2NF Solution: Split into two tables:
StudentTable (StudentID, StudentName)
EnrollmentTable (StudentID, CourseID, CourseFee). 

3rd Normal Form (3NF)
Must be in 2NF, and no non-key column should depend on another non-key column. Everything must depend only on the primary key
Example
2NF Table: (EmployeeID, Name, ZipCode, City)
Problem: City depends on ZipCode, and ZipCode depends on EmployeeID. So, City indirectly depends on EmployeeID (transitive dependency).
3NF Solution: Split into two tables:
EmployeeTable (EmployeeID, Name, ZipCode)
LocationTable (ZipCode, City).

### 7. What is denormalization? When would you denormalize data?
Denormalization is the process of combining tables or adding duplicate data to improve read performance.

I would use denormalization when:
- Fast data retrieval is more important than storage efficiency
- The system requires frequent read operations
Example: Reporting dashboards or analytics systems

### 8. What are database indexes? How do they improve performance?
Database indexes are special data structures that help databases find data faster, similar to an index in a book.

Instead of scanning the entire table, the database uses the index to quickly locate required data. This improves query performance, especially when searching or sorting large datasets.

### 9. What are the trade-offs of using indexes?
Index improve read performance but have some disadvantages:
- They take extra storage space.
- They slow down insert, update, and delete operations because indexes also need updating.
- Too many indexes can reduce overall database performance.

So indexes should be used carefully on frequently searched columns.

### 10. What is a primary key? What is a foreign key?
A primary key is a unique identifier for each record in a table. It cannot contain duplicate or null values.
Example: User ID in a Users table.

A Foreign key is a column that links one table to another by referencing the primary key of another table. It helps maintain relationships between tables.
Example: User ID in an Orders table referencing Users table.
