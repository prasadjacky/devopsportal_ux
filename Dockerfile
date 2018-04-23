FROM node:boron-alpine

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
#COPY package.json /usr/src
#RUN npm config set strict-ssl false
#RUN npm config set registry "http://registry.npmjs.org/"
#RUN npm config set proxy http://10.101.3.148:3128/
#RUN npm config set https-proxy https://10.101.3.148:3128/
#RUN npm install
# Bundle app source
COPY . /usr/src
#RUN rm -rf dist/
#RUN npm run tsc
EXPOSE 3000
CMD [ "npm", "start" ]
