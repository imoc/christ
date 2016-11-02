/*!
 * redis client
 */
'use strict';

var settings = require('../models/db/settings');
var redis = require('redis');
// var client = redis.createClient(settings.redis_port, settings.redis_host);
// client.auth(settings.redis_psd);
var options = {"no_ready_check":true};
var client = redis.createClient(settings.redis_port, settings.redis_host,options);
 client.auth(settings.redis_username + '-' + settings.redis_password + '-' + settings.redis_db_name);
module.exports = client;