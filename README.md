# How to use template

## Prerequisites
You need to have NodeJS installed in order to use this. A server for socket IO is also included with the package and remains in a folder socket-server. Some new implementations have
been made on the server, the main reason for more implementations is to let other users get all active rooms.

## Getting started

###
Starting the websocket server

Run in the terminal following

```
node socket-server/index.js
```

###
Starting the app server

To install all modules needed to run the app we need to run in terminal

```
npm install

```

Once all modules have been added we can start the server as following

```
npm start
```

When you have run npm start, the browser opens up on localhost:9000 and every time you change your code within the /src folder the browser refreshes and shows the latest updates. While server is still running you can always visit the localhost:9000 on your browser.
