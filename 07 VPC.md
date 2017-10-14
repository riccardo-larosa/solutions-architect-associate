VPC
===

A VPC spans all the Availability Zones in the region.
After creating a VPC, you can add one or more subnets in each Availability Zone.
When you create a subnet, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block.
Each subnet must reside entirely within one Availability Zone and cannot span zones.
Availability Zones are distinct locations that are engineered to be isolated from failures in other Availability Zones.
By launching instances in separate Availability Zones, you can protect your applications from the failure of a single location. We assign a unique ID to each subnet.

Virtual Private Cloud can span AZ
Provision a logically isolated section of AWS
Customize the network configuration
Create Hardware VPN btw corporate dtacenter and your VPC

!!  **one subnet = one availability zone**
!!  **security groups can span multiple AZ**

security group are statefull: outbound rule means there is an inbound rule
Network Access Control List are stateless instead: return traffic needs to be explicit

Default VPC vs Custom VPC
-------------------------
- all subnets in default vpc have a route out to the internet
- each EC2 instance has both a public and private IP address
- if you delete default VPC is to contact AWS

VPC Peering: direct network connection on private IP addresses
No transitive peering!

## NAT
### NAT instances
**remember to disable source/destination check on the instance**
nat instance must be in a public subnet
if you are bottlenecking, increase the instance size
create high availability using autoscaling groups
behind a security group

###NAT gateways
preferred by enterprise
scale up to 10Gbs
no need to patch
automatically assigned a public ip address
remember to update your route tables

## Access Control Lists
one subnet = one network ACL

one network ACL can be assigned to multiple subnet BUT one subnet can only have one network ACL
network acl containes a numbered list of rules that is evaluated in order starting with the lowest

network ACL has separate inbound and outbound rules

block IP addresses using network ACL not Security groups

## Nat vs Bastion
Nat used to provide internet traffic to EC2 vs.
Bastion is used to admin EC2 instances in private subnets


## Resilient architecture:
2 public subnets and 2 private subnets
ELB in 2 public subnets in 2 different availability zone

monitor network traffic within your custom VPC using VPC Flow logs

use VPC Flow logs to monitor traffic

## Site-to-Site VPN
You must have a VPC with Hardware VPN Access, an on-premise Customer Gateway, and a Virtual Private Gateway to make the VPN connection work.

## Build your own VPC
Create VPC 10.0.0.0/16
Create subnet1 in us-east-1a 10.0.1.0/24
Create subnet2 in us-east-1b 10.0.2.0/24
Create Internet Gateway and attach to VPC
New Route Table and associate with VPC
Associate a route out to the internet: 0.0.0.0/0 <-> IGW
Associate subnet1 to internet route table
Subnet1: modify auto assign public IP
Put Web server in 10.0.1.0
put SQL server in 10.0.2.0
Create NAT gateway in subnet1 (public)
Edit main VPC route table


