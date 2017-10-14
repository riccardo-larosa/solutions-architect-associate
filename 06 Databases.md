Databases
=========

RDS types (OLTP)
---------
SQL Server
Oracle
MySQL Server
PostgreSQL
Aurora
MariaDB

NoSQL
-----
- DynamoDB

Olap
----
- Redshift

Elasticache
-----------
web service that makes it easy to deploy, operate, and scale in-memory cache in the cloud.
- memcached
- redis

DMS
---
Database Migration Services

RDS Backups
===========
automated backups allow to recover DB to any point in time within a "retention period" (usually 1 and 35 days)
enabled by defaul

Snapshots
---------
are done manually
Restore version is a new

Encryption
----------
at rest is suported for MySQL, Oracle, SQL Server, PostgreSQL and MariaDB

Replication
-----------
Multi-AZ allows to have an exact copy of prod db in anoher AZ.
AWS handles replication for us.
Multi-AZ is for DR only

**Read Replica**
  it uses asynch replication to enable scalability. only read only.
  up to 5 read-replica of DBs.
  Not for DR. Must have automatic backupds turned on
  each read replica will have its own DNS end point
  read replicas can be promoted to be their own databases. this breaks the replication

Aurora: 2 copies of data are contained in each availability zones, with minimum of 3 AZ => 6 copies of your data

DynamoDB vs RDS
---------------
offers "push button" scaling, on the fly

DynamoDB
--------
fast NoSQL db for applications that need consistent, single-digit millisecond latency at any scale. fully managed and supports both document and key-value data models
- stored on SSD storage
- spread acorss 3 geo data centres
  - eventual consistent reads (default): consistency is within 1 sec
  - strongly consistent reads: strong consistent read

pricing
- provisioned throughput capacity
- storage cost
expensive for writes but cheap for reads

Limit to storage of large text and binary objects is 400KB

DynamoDB HTTP Request Headers:
- host
- x-amz-date
- content-type
- x-amz-target

Redshift
--------
petabyte-scale data warehouse service in the cloud
- single node (160GB)
- Multi node:
  * Leader node;
  * compute node (up to 128 nodes)

Columnar data storage: column based sysmes require far fewer I/Os, improving query performance
Advanced compression is part of redshift: compression chosed by redshift
Massively Parallel Processing (MPP): easy to add nodes

Pricing:
- compute node hours
- backup
- data transfer

encrypted in transit using SSL and at rest

only available in 1 AZ
columnar storage block size: 1MB

Elasticache
-----------
web service to scale in-memory cache in the cloud
- memcached: memory object caching systme
- redis: open source in memory key-value. support multi-AZ

Aurora
------
it's mySQL compatible, 5 times better performance
Scaling
- start with 10GB, incrememnts in 10GB to 64TB
- scale up is easy but only during maintenance
- 2 copies of data in each of AZ with minimum of 3 AZ (really highly redundant)
- Replicas:
  + aurora replicas
  + mysql read replicas



<TODO> read RDS FAQs




