FROM java:8
VOLUME /tmp

ADD . /usr/app

ENV eureka.client.serviceUrl.defaultZone @eureka.client.serviceUrl.defaultZone@

EXPOSE 8081

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/usr/app/@project.build.finalName@.jar"]
