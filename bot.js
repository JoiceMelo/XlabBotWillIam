let Discord = require('discord.io');

let logger = require('winston');

let auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
let bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {

// Our bot needs to know if it will execute a command

// It will listen for messages that will start with `!`

if (message.substring(0, 1) == 'Olá') {

    let args = message.substring(1).split(' ');

    let cmd = args[0];


    args = args.splice(1);

    switch(cmd) {

        // !ping

        case 'Olá':

            bot.sendMessage({

                to: channelID,

                message: 'Carai, vei...'

            });

        break;

        // Just add any case commands if you want to..

     }

 }
});