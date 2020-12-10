FROM node:latest
EXPOSE 9090

# create app directory
WORKDIR /app

# Copy files to image
COPY ["./package.json", "./package-lock.json", "tsconfig.json", "/app/"]

# run npm install before copy ./src can help you cache images
RUN npm install

COPY ["./src", "/app/src"]

CMD ["npm", "start"]