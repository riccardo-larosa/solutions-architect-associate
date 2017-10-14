#!/bin/bash
yum update -y
yum install httpd -y
service httpd start
chkconfig httpd on
cd /var/www/html
aws s3 cp s3://mywebsitebucket-rl/index.html /var/www/html
