FROM    centos:centos7

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

# Install app dependencies
#COPY package.json /src/package.json
#RUN cd /src; npm install

# App stuff
COPY /api/config/twitchMonitor.js /api/config/twitchMonitor.js
COPY /api/config.json /api/config.json
COPY /api/package.json /api/package.json
COPY /api/app.js /api/app.js

RUN cd /api; npm install

EXPOSE 80

CMD ["node", "/api/app.js"]