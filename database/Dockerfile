FROM mysql:5.7

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}

# copy predefined config file
COPY ./configs/default.cnf /etc/mysql/conf.d/

# To be sure that MySQL will not ignore configs
RUN chmod og-w /etc/mysql/conf.d/default.cnf


EXPOSE 3306

CMD ["mysqld"]