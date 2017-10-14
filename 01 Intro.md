# Solutions Architect Associate


Networking & Content Delivery
-----------------------------
VPC: Virtual Private Cloud. Virtual Data center
Route 53: DNS service
Cloud Front: CDN
Direct Connect: dedicated connection to AWS


Compute
-------
EC2: virtual machine
EC2 Container Services: managed cluster of EC2 running Docker
Elastic Beanstalk: provision underline infrastructure of your app
Lambda: serverless infrastructure
Lightsail: out of the box cloud for wordpress site or Joomla site


Storage
-------
S3: objects store
Glacier: backups
EFS: elastic file server is file based and you can share it (could install DB for instance)
Storage gateway: way of connecting up S3 to your data center. it's a VM image that you install on prem

Databases
---------
RDS: relational DB
DynamoDB: non relational DB
Redshift: Datawarehouse
Elasticache: cache for DB

Migration
---------
Snowball: migrate disks to different services
DMS: DB migration services
Server Migration Services: migrate Virtual machines like VMware

Analytics
---------
Athena: SQL queries on S3 files like csv
EMR: Elastic Map Reduce used to process large amount of data, using hadoop/spark
Cloud Search: fully managed by AWS
Elastic Search: use open source  (try Angolia as saas search)
Kinesis: stream and analyze large amount of data
Data Pipeline: service to move data from one place to another (from S3 to DynamoDB for instace)
QuickSight: BI visualization/dashboard tool

Security & Identity
-------------------
IAM: identity & access management. used a lot for everything
Inspector: does security report on all VM
Certificate Manager: free SSL cert
Directory Service: connect Active Directory to AWS
WAF: Web Application Firewall. gives you application protection like sql injection
Artifacts: how you get documentation (Compliance Report in the dashboard)

Management Tools
----------------
Cloud Watch: monitor performance of AWS environment like EC2 disk/ram utilization
Cloud Formation: turning infrastructure in to code. a document that describes your aws environment
Cloud Trail: auditing AWS resources and changes to AWS environment
Opsworks: automating deployment using Chef
Config Manager: monitors environment and notifies when environment break rules
Service Catalog: for the enterprise, specific images for EC2 or RDS. could also limit services
Trusted Advisor: automate way of scanning env and giving tips for cost optimazion, security optimization

Application Services
--------------------
Step Functions: new service to visualize what happens in microservice
SWF: Workflow services. automated tasks
API Gateway: monitor APIs to access biz logic
AppStream: streaming desktop application like windows
Elastic transcoder: changes video format for different devices

Developer Tools
---------------
CodeCommit: basically github
CodeBuild: compile code in different environment
CodeDeploy: deployes code
CodePipeline: keeps track of different versions in different environments

Mobile Services
---------------
Mobile Hub: it is its own console for mobile developer and manages user auth, content delivery
Cognito: makes easy to use social identity to sign in to your apps
Device Farm: test app on multiple devices (physically)
Mobile Analytics: analyze mobile data
Pinpoint: google analytics for mobile app

Business Productivity
----------------------
WorkDocs: stores document securely in the cloud
WorkMail: like exchange

IoT
---
iOT: keeps track of all iot devices

Desktop & App Streaming
-----------------------
Workspaces: desktop in the cloud
AppStream 2.0: stream desktop app to your users

Artificial Intelligence
-----------------------
Book by SuperIntelligence by Nick Bostrom
Alexa: amazon voice service in the cloud (basically talking to lambda)
lex: is the service behind alexa (you don't need an echo to talk to alexa)
Polly: turns text into voice (mp3)
Machine Learning: give aws a dataset, give an outcome and aws uses ML to predict model
Rekognition: upload a picture and tells you what is in it and creates metadata

Messaging
---------
SNS: simple notification service. notification by email, sms, http
SQS: simple Queue service. decoupling application
SES: simple email service. send/receive email
















