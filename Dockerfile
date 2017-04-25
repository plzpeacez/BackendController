FROM node:latest

# WORKDIR /usr/src/
RUN git clone https://github.com/plzpeacez/BackendController.git
RUN cd BackendController

WORKDIR /BackendController

RUN npm install

# Bundle app source
# COPY . /usr/src/app

EXPOSE 3001
CMD [ "node", "server" ]

#$ docker build -t <your username>/node-web-app .
#$ docker build -t plzpeacez/node-service .

#$ docker run -p 49160:8080 -d <your username>/node-web-app
#$ docker run --name node -dit -p 80:3001 plzpeacez/node-service