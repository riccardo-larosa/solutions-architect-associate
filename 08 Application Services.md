Application Services
====================

## SQS
Simple Queue Services is web service that gives you access to a message queue. a temporary repository for messages that are awaiting processing

pull based system

decouple the components of an application so they run independently. the queue act as a buffer.

Two queues:
- standard queues (default): nearly unlimited transaction per second. provide best-effort ordering (but not guaranteed)
- fifo queues: guarantee the messages in which order they arrived. limited to 300 transactions per second

- SQS is pull based
- Messages are 256kb
- messages kept in queue from 1 min to 14 days (default is 4 days)
- Visibility Time Out is amount of time that the message is invisible to the SQS queue (max is 12 hours)
- guarantee that msgs will be processed at least once
- SQS long polling can help decrease cost, since it doesn't return a response until a message arrives in the queue. Short polling instead returns immediately

## SWF
Simple Workflow Service is web service that makes it easy to coordinate work across distributed application components.

SWF Actors
-----------
* Workflow Starters: an app that can initiate a workflow (e.g.: ecommerce)
* Deciders: controls the flow/coordination of tasks
* Workers are programs that interact with SWF to get tasks and return results

SWF ensures that a task is assigned only once and is NEVER duplicated.

SWF Domains: isolate a set of types, execution, and task lists from others within the same account
Parameters are specified in JSON

Maximum workflow can be 1 year

SWF is task oriented API
SQS is message oriented API

## SNS
Simple Notification Service is a web service to setup, operate and send notifications from the cloud

it's "pub-sub" messaging.
it's a push mechanism

SNS Subscribers
---------------
HTTP/HTTPS, email, email-JSON, SQS, Application, Lambda

topic is an "access point" to dynamically subscribe for identical copies of the same notification

inexpensive, pay as you go

SNS vs SQS
----------
Both message-based systems
SNS is push vs SQS is pull

### Elastic Transcoder

Media transcoder in the cloud, convert media files to different formats

### API Gateway

fully managed service to publish, maintain, monitor and secure APIs
provides API caching
low cost and efficient
scales automatically
throttle requests to prevent attacks
connect to cloudwatch to log requests

API Caching
-----------
reduce number of calls to endpoint

Same Origin Policy
------------------
CORS (cross origin resource sharing)

### Kinesis
Streaming data: data generated continuously by lots of data sources
Kinesis makes it easy to load and analyze streaming data

* Kinesis Streams: stores data (24 hrs to 7 days) in shards.
   5 transactions per second for reads.
   data capacity is a function of the shards

* Kinesis Firehose: automated. can analyze data using lambda. there is no automatic retention policy

* Kinesis Analytics: can use sql query to data in firehose or streams and send to s3, redshift






