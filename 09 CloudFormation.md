CloudFormation
==============
CF is infrastructure as code
CF is free but you pay for resources you provision
CF takes care of figuring out the order for provisioning AWS services

CF Template is an architectural diagram
CF Stack is the end result of that diagram
CF templates are in JSON or YAML

## Templates
- Mandatory Elements
- Optional Elements

`JSON
{
    "Resources" :{
        "HelloBucket":{
            "Type":"AWS::S3::Bucket"
        }
    }
}`

* Outputting data
  use Fn:GetAtt

