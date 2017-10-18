# DynamoDB

fast and flexible NoSQL db for app that need consistent, single-digit millisecond latency at any scale.
fully managed.
supports document and key-value data models
Stored on SD Storage
spread across 3 geo distinct data centers

Read Models:
- Eventual Consistency Reads (Default): best read perf within a sec
- Strongly Consistent Reads (less read performance)

Tables
Items (Rows)
Attributes: PrimaryKey, ColumnNames, Support up to 35 nested attributes

## Price
Provisioned throughput Capacity (write and read)
First 25 GB stored is free

## Conditional Writes
if item = $10 then update to $12
they are indempotent. you can send the same conditional write request multiple times, but it will have no further effect

## Atomic Counters
are not indempotent. you use the UpdateItem() operation to increment or decrement the value of an existing attribute

## BAtch Operation
- BatchGetItem() can retrieve up to 16MB (for up to 100 items). can also retrieve from multiple tables



## Indexes & Streams

### Primary Keys
1. Single Attribute: Partition Key (hask key) composed of one attribute
2. Composite (think unique ID and a date range): Partition Key & Sort Key (hash & range)

### Indexes
1. Local Secondary Index: same partition key, different sort key. can only be ccreated when creating table. cannot be modified or removed later
2. GLobal Secondary Index: different partition key and secondary key. can be created or added later

### Streams
Used to capture any modification of the tables

### Query
- operation in table using only primary key attribute values. must provide a partition key attribute name and distint value to search for
- returns all of the data attributes unless you use the *ProjectExpression* parameter
- results sorted by sort key. to reserve order se the *ScanIndexForward* to false

### Scan
- returns all data attributes for every item
- query operation is more efficient than a scan operation

## Provisioned Throughput Calculations
- Read:
  All reads are rounded up to increments of 4KB
  Calculate read units per item and round up to nearest 4KB
  Divide by 4KB
  Multiply by number of items => read throughput
  Divide by 2 if eventually consistent
- Write:
  Each write units consist of 1KB
  Calculate write units by using size
  Multiply by number  => write throughput

## Errors
400 HTTP Status Code - ProvisionedThroughputExceededException
The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish.

## Web Identity Providers
1. User authenticates with ID provider
2. they are passed a token by ID provider
3. Your code calls **AssumeRoleWithWebIdentity** API and provides the providers token and specifies the ARN for the IAM Role
4. App can now access Dyanmodb from between 15 minutes to 1 hour
