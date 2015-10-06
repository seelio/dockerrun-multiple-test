FROM node:4

COPY server.js server.js

CMD ["node","server.js"]