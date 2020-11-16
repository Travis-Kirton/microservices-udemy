 #### Section 3: Containerising Services

 ---


##### Why Docker?

- Running app makes assumptions about environment
- Running app requires knowledge of how to start it (`npm start`)

- Docker solves these issues. Containers wrap up everything needed for a program + how to start it and run it.


##### Why Kubernetes?

- Kubernetes is a tool for running multiple containers together
- We give a config file to describe how we want containers to run/interact


- ###### K8S Design
  - Cluster
  - Nodes within Cluster (Node == VM)
  - Config file:
    - Run 2x Copies of Posts Service
    - Allow them to be accessible within network

- Allows Sevice to send requests to common communication channel, request will be forwarded by Kubernetes


##### Docker Files

- <b>Dockerfiles</b> - See section2 Dockerfiles

