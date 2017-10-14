# Route 53

Routing Policies
- Simple: default. most common when you have one web server
- Weighted: maybe a/b testing the new site. or maybe traffic is more in a specific region. it can be to 2 ELB in the same region. allows to split traffic based on different weights assigned
- Latency: allows to route traffic based on lowest network latency for end user
- Failover routing policy: used when you want to create an active/passive set up. for instance, site in US and DR in Asia
- Geolocation routing policy: choose traffic based on location of users (from which DNS queries originate)


ELBs do not have IP address, you resolve them using a DNS name

Understand difference between an alias record and a CNAME




vypr vpn

