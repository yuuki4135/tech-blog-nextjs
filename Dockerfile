FROM node:22.13.0-bookworm-slim

RUN apt-get update && apt-get install -y bash vim git

# add user
RUN mkdir -p /home/node/app/node_modules
COPY --chown=node:node . /home/node/app
RUN npm install -g firebase-tools

# Set appropriate permissions to the app directory
RUN chown -R node:node /home/node
USER node
WORKDIR /home/node/app