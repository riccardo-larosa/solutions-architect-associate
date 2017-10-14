# IAM


centralized control of aws account
shared access to your aws account
granular permissions
identity federation
multifactor authentication
manage pwd rotation policy


- Users: end users (people)
- Groups: collection of users with one set of permissions (finance group)
- Roles: assign them to AWS resources to access other resources (e.g.: S3-Admin-Access)
- Policies: document that define one or more permissions. can assign policy to users, groups or roles

IAM is universal/global and does not require a region

https://382639629906.signin.aws.amazon.com/console

- root account is the account created by default
- new users have access key ID and secret access keys
- access key ID and secret access keys IDs are used Programmatically when interacting with AWS
- setup Multi Factor Authentication (MFA) on root account
