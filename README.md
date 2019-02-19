## Overview ##

React client side, Java / Spring Boot server side. 

MySQL database -- currency type drop downs are populated from the database. The database server is set up using Docker.

Can run the application using docker-compose or just mvm.

## Short Comings ##

No tests is probably one of the biggest short comings. The css styling is also pretty bare bones. 

I also wanted to experiment with Spring Reactive Web but I wasn't able to. I'm just doing a simple polling requests
client side to update the currency amount every 100ms.

I could have also structured that packages a bit better.

## How To Run ##

The application can be run with `docker-compose up`. This will create the Database and run Spring Boot.

Alternatively, run `docker-compose up -d mysql` and then launch the application using `mvn clean spring-boot:run`.
Just make sure to update the application.properties file appropriately (currently not configured very well :/ )