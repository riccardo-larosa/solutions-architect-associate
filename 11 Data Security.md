# Data Security

read https://d0.awsstatic.com/whitepapers/aws-security-whitepaper.pdf

Recommendation:
- Implement MultiFactor Autenthication
- communicate on SSL/TLS
- API/user activity logging setup with CloudTrail

Storage Decommissioning: all data is decommissioned

Network Security: can also use an IPsec VPN (direct connect)

## Network Monitoring & Protection
AWS protects against: DDos, Man in the middle attack, Ip Spoofing, port scan (must request a vulnerability scan in advance)

AWS Trusted Advisor: makes recommendation, same money, improve system performance, close security gaps

Instance isolation: uses Xen hypervisor.

Firewall: all ingress is denied by default

ELB: ssl termination on the load balancer is supported. it passes the IP address to web server

Direct Connect: VPN


## Risk and Compliance
read https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf

## Storage Options

https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf

Storage Gateway:
- gateway cached: most recent data is cached S3
- gateway stored volumes: all data is stored on premise and asynch backed up

## Architecting for the cloud
https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf
https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf

mostly opex, not capex
just-in-time infrastructure

Decouple your components == SQS

Elasticity:
1. proactive cycling scaling: periodic scaling
2. proactive event-based scaling: scaling for a specific event
3. auto-scaling based on demand (CPU utilization)




