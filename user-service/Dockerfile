FROM ubuntu

MAINTAINER Bartosz Grabski

RUN apt-get update && \
apt-get -y install -y curl && \
curl -s https://deb.nodesource.com/setup | sudo bash - && \
apt-get -y install nodejs build-essential

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

EXPOSE 3000

CMD ["node" , "app.js"]