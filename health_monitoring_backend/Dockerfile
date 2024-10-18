# Использование базового образа OpenJDK
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/health-monitoring-backend.jar health-monitoring-backend.jar
ENTRYPOINT ["java","-jar","/health-monitoring-backend.jar"]
