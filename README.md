# angular9SpringBoot2

creato  e fatto unione da:
# Spring-Boot-Angular8-Fullstack-Jwt-Authentication
https://github.com/Sudarshan-Gowda/Spring-Boot-Angular9-Fullstack-Jwt-Authentication

security:
https://github.com/mselerin/ngx-security

usato e integrato il template :
https://github.com/abrahamimanzi/AdminBSBMaterialDesign-master

per far partire:
la parte server:
```sh
cd spring-boot-jwt-authentication
mvn clean install
cd target
java -jar spring-boot-jwt-authentication-0.0.1-SNAPSHOT.jar
```

parte client:
```sh
cd angular9-jwt-auth-app
npm install

npm start
```
(per prod: npm build)

per usare il simulatore interno client:

angular9-jwt-auth-app\src\app\app.module.ts

set 

const vers: any= "sim";
