FROM maven:3.8.7-openjdk-18-slim AS MAVEN_BUILD

MAINTAINER Software Shinobi "the.software.shinobi@gmail.com"

WORKDIR /

COPY . .

RUN mvn install -DskipTests

FROM eclipse-temurin:18-jre-alpine

COPY --from=MAVEN_BUILD /target/soy-yo-mateo-api-1.0.jar /soy-yo-mateo-api.jar

COPY --from=MAVEN_BUILD /src/main/resources/application.properties /application.properties

CMD ["java", "-jar", "/soy-yo-mateo-api.jar"] 
