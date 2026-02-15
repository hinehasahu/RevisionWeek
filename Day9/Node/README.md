### 1. What is database scaling? Explain vertical vs horizontal scaling.
Database scaling means increasing the database's capacity to handle more users, more data, and more requests without slowing down or crashing.

As application grows, a single database server may not be enough, so we scale the database.

There are two main types:

Vertical Scalling (Scaling Up): It increases the processing power, memory, or storage of single node.
Example: 
- Increasing RAM from 8GB to 32GB
- Upgrading CPU
- Using faster SSD storage
So here, we are not adding new servers, we are making the existing server stronger.

Example: If my MySQL database becomes slow, I upgrade the server.

Horizontal Scaling (scaling Out): It involves adding multiple database servers and distributing data among them.
Instead of one powerful server, we use many servers.
Example:
Instead of 1 database server, we use 4 database servers. Data is divided between them. This is done using Sharding and Replication.

Real world example: Large application like Instagram, Facebook, Amazon use horizontal scaling.

Vertical scaling increases power of one server, while horizontal scaling adds multiple servers to distribute load and improve scalability.

### 2. What is database replication? Explain master-slave replication.
Database replication means copying data from one database server to another automatically.

This is done to improve: Performance, Availability, provides Backup
In replication, there are usually two types of servers:

Master Server: handles write operations INSERT, UPDATE, DELETE
Slave Server: Copies data from master, Handles read operations

How it works:

Step 1:
User registers → data saved in Master

Step 2:
Master automatically copies data to Slave

Step 3:
User reads data → data fetched from Slave

Real world example:

MySQL replication
MongoDB replica sets

### 3. What is database sharding? How does it work?
Database sharding means splitting a large database into smaller databases called shards.
Each shard contains part of the data.
This is done to improve performance and scalability.

Why we need it?
If database becomes very large: Queries becomes slow, Server becomes overloaded, so we divide data.

Example:

Suppose we have 1 million users.

We divide like this:

- Shard 1 → users 1 to 300k
- Shard 2 → users 300k to 600k
- Shard 3 → users 600k to 1M

Now each database handles fewer users.
This improves speed.

How system decides shard
Using shard key
Example: User ID

### 4. What are the challenges of sharding?
Sharding improves performance but also creates challenges.
The first challenge is complexity. Managing multiple database servers is more difficult than managing a single database.

The second challenge is related to joins. If related data is stored in different shards, performing join operations becomes difficult and slow.

The third challenge is uneven data distribution. Sometimes one shard may have more data and traffic than others, which creates imbalance.

Another challenge is backup and maintenance, because we need to monitor and maintain multiple database servers.

So overall, sharding improves scalability but increases system complexity.

### 5. What is database partitioning? How does it differ from sharding?
Database partitioning means dividing a large table into smaller parts, called partitions, but all partitions remain inside the same database server.

This helps improve performance and makes data easier to manage.

For example, an orders table can be partitioned based on year, like 2023 orders and 2024 orders.

Sharding is different because it divides data across multiple database servers, not just inside one server.

So the main difference is:

Partitioning happens inside one database server, while sharding happens across multiple database servers.

Partitioning is mainly used for performance, while sharding is used for scalability.

### 6. What is a connection pool? Why is it important?
Connection pool is a group of reusable database connections that are maintained by the application.

Normally, creating a new database connection for every request is slow and expensive.

Connection pooling solves this problem by reusing existing connections instead of creating new ones every time.

This improves performance and reduces database load.

For example, in Node.js, when we use MongoDB or MySQL, connection pooling is used internally.

It is important because it makes database communication faster and more efficient.

### 7. What are N+1 queries? How do you solve this problem?
The N+1 query problem happens when the application makes too many database queries instead of one optimized query.

For example, if I fetch all users using one query, and then for each user I fetch their orders using separate queries, this results in many extra queries.

If there are 100 users, then total queries will be 101.

This reduces performance.

We can solve this problem using JOIN in SQL, or using populate in MongoDB.

This allows us to fetch related data in a single query instead of multiple queries.

This improves performance significantly.

### 8. What is caching? Explain different caching strategies (cache-aside, write-through, write-back).
Caching means storing frequently used data in memory so that it can be accessed faster without querying the database every time.

This improves application performance.

One common tool used for caching is Redis.

There are different caching strategies.

Cache-Aside Strategy:
In this strategy, the application first checks the cache.

If data is not found, it fetches from the database and stores it in cache for future use.

This is the most commonly used strategy.

Write-Through Strategy:
In this strategy, data is written to both the cache and the database at the same time.

This keeps cache always updated.

Write-Back Strategy:
In this strategy, data is first written to the cache and later written to the database.

This is faster but risky, because if cache fails, data may be lost.

### 9. What is the CAP theorem?
CAP theorem states that a distributed database system can only guarantee two out of three properties, which are Consistency, Availability, and Partition tolerance.

Consistency means all users see the same data at the same time.

Availability means the system always responds to requests.

Partition tolerance means the system continues working even if there is network failure between servers.

In real-world distributed systems, network failures can happen, so partition tolerance is required.

Because of this, systems usually choose between consistency and availability.

For example, MongoDB focuses more on availability and partition tolerance.

### 10. What are database transactions? What is the MVCC (Multi-Version Concurrency Control)?
A transaction is a group of database operations that are executed together as a single unit.

It ensures that either all operations succeed or all operations fail.

This maintains data consistency.

For example, in bank transfer, money is debited from one account and credited to another account.

If one operation fails, the entire transaction is rolled back.
This prevents incorrect data.

MVCC (Multi Version Concurrency Control):

MVCC is a method used by databases to handle multiple users accessing and modifying data at the same time.

It works by creating multiple versions of data instead of locking it.

This allows users to read data without blocking other users.

This improves performance and concurrency.

Databases like PostgreSQL and MySQL use MVCC.