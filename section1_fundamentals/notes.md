 #### Section 1: Fundamentals around Microservices

 ---
 
 ##### Database-Per-Service

- Each service to run independently from one another
- Database schema/structure might change unexpectedly
- Some services might function more efficiently with different types of DB's (sql vs nosql etc)

##### Problems with Data

- Features that requires data from multiple services
- Data management between services poses a big challenge

  * <u>Implementations</u>
    1. <b>Sync</b>: Service communicate with each other using direct request. E.g. 
    `Service A -> Service B`
    `Service A -> Service C` 
    (no requests to database)

    Introduces dependency on previous service requests

    2. <b>Async</b>: Services communicate with each other using evemts. E.g.
        - Create Event Bus
        - Services emit/recieve events from `Event Bus`
        - Service D emits `Event` to request some information. `Event` stored into `Event Bus`
        - Service A views event in `Event Bus` & responds (it was subscribed to event). Service A emits `Event` back onto `Event Bus`
        Service D recieves `Event` from `Event Bus`.
        - Same downsides as Synchronous communication