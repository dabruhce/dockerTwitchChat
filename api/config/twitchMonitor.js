var req = require('request');
var fs = require('fs');
var io = require('../app').io;
var fs = require('fs');
var config = require('../config.json');
//console.log(config);
var irc = require("tmi.js");
var isStreamStarted = false;

var client = new irc.client(config);

client.connect();

StartStream();

function sendChat(channel, message) {
    if(client.userstate.hasOwnProperty(channel)) {
        client.say(channel, message);
    }
    else {
        setTimeout(sendChat, 10, channel, message); // Try again in 10ms
    }
}


function StartStream() {
	isStreamStarted = true;
	console.log('stream configured ' + config.channels);

    client.on("chat", function (channel, user, message, self) {


        console.log(JSON.stringify(channel));
        console.log(JSON.stringify(user));
        console.log(JSON.stringify(message));
        console.log(JSON.stringify(self));



    });


}