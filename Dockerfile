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