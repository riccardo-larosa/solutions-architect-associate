# Architecting a site


IAM -> create S3 admin access for EC2 role

VPC -> create security groups for WebDMZ and RDS
       - WebDMZ: add inbound rules for http/https, ssh
       - RDS: add rule for MySQL from WebDMZ

EC2 -> create Application Load Balancer and apply to all AZs. add it to WebDMZ SG

S3 -> new bucket for code and one for media

Cloudfront -> new distribution (web) for the S3 media bucket, restrict access and create new identity and grant read permission

RDS -> MySQL production, select DB instance class and choose Multi-AZ
       add to RDS Security group, no publicly accessible

Route53 -> Create recordset (naked domain name) for hosted zone
		alias target -> attach to Application Load Balancer

EC2 -> amz linux AMI, t2-micro, IAM role: S3 admin access
		advanced detail: bootstrap script
		security group: webdmz

EC2 Load Balancer -> Target Group -> add target and registered instances

Browser -> setup wordpress

Backup code to S3 --> get list of buckets aws s3 ls
	copy: `aws s3 cp --recursive /var/www/html s3://acloudguru-wpcode2017-rl`

Cloudfront to serve images:
	sync upload directory: `aws s3 sync --delete /var/www/html/wp-content/uploads s3://acloudguru-wpmedia2017-rl`
	URL rewrite (htaccess)
	<code>
	`Options +FollowSymlinks
	RewriteEngine on
	rewriterule ^wp-content/uploads/(.*)$ http://d2jmrva8tfzxcq.cloudfront.net/$1 [r=301,nc]
	# BEGIN WordPress
	# END WordPress`
	</code>

	add a cron job in /etc/crontab: `raws s3 sync --delete /var/www/html/wp-content/uploads s3://acloudguru-wpmedia2017-rl`

	add another cron job to synch code to the other s3 bucket
	`*/5 * * * * root aws s3 sync --delete /var/www/html s3://acloudguru-wpcode2017-rl`


Now that I have this setup I take an image AMI

I can now kill the EC2 instance(s)

EC2 -> Auto-Scaling -> Launch Configuration -> choose our AMI instance 	use S3 admin role, existin webdmz SG
	create autoscaling group, start with 2 instances, add all 5 AZ, receive traffic from one or more load balancer,
	add Appl Load Balancer target groups, health check type = ELB,
	increase group size: create alarm for avg of cpu utilization is > 75% for 5 min
		add 2 instances
	decrease group size: same < 20% for 3 min
		remove 1 instance
	add Name of Web Servers

	now EC2 instances are being created



