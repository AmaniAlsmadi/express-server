'use strict';

require('dotenv').config();

const server = require('./sever');
server.start(process.env.PORT || 3000);