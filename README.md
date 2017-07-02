# hybocracy

Project split into 2 parts
 - client (angular 2 single page app running in browser)
 - server (server api running on node)

Both are written using typescript

# Continuous Integration
https://travis-ci.org/ChrisBatzilis/hybocracy

# Prerequisites:
nodejs 7.x, 8.x / npm 3.x, 4.x

# Client
Created using angular-cli: https://github.com/angular/angular-cli
npm install -g @angular/cli
npm install

# Server
npm install
typings install (should be automatic)

# How to run in dev mode
 - in server path:
npm run watch:compile (compiles on any change to source files)
 - separate shell:
npm start (run compiled stuff)
 - in client path:
ng serve
