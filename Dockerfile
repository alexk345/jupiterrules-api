FROM node:8
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#COPY ./wait-for-it.sh /usr/src/app/wait-for-it.sh
#RUN chmod +x /usr/src/app/wait-for-it.sh

#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]