# ECS

## Docker
Docker is a software platform to build, test and deploy app quickly
highly reliable;
infinitely scalable
Docker Containers: allow to easily package an app code config, and dependencies in building blocks tho deliver consistency, operation efficiency, developer productivity and version control

### Virtualization vs Containerisation
Container only stores app and dependencies (mysql, apache, etc)
Virtualization has density compromises
Docker improves density and portability by removing the Guest OS

Benefits
--------
escape from dependency hell
progression from dev, test, qa, prod
isolation
better resource management
extreme code portability
micro-services

Components
----------
Docker Image
Docker Container: created by docker image.
Layers/union file system: allow files and branches to
DockerFile: include instructions stored in DockerFile
Docker Daemon / Engine: runs on linux to build/ship and run containers
Docker client: interface with Docker engine
Docker Registries: hold these images

## ECS
- EC2 Container Service is highly scalable, fast, container mgmt service to manage docker containers on a cluster fo EC2 instances
- eliminates the need to operate your own cluster management and config management systems
- also used to create consistemnt deployment and build experience, manage and scale batch and ETL workloads, and managed microservices

Containers are created from images, read-only template with instuctions.
images are stored in a registry

## ECR
EC2 Container Registry is a managed DOcker registry service, supports private docker repositories.

Task Definition
---------------
JSON file to describe a docker container, networking mode, environment variables, etc

ECS Clusters
------------
Logical grouping of container instances that you can place tasks on
Clusters con contain mulitple container instance types
Clusters are region-specific
Container instances can only be part of one cluster at a time

Scheduling:
* Service scheduler
* Custom scheduler

ECS Container Agent
-------------------
allows container instances to connect to cluster

Security:
in ECS roles can be specified at the task level, but roles can also be granted to the EC2 instances that paraticapate in the ECS cluster







