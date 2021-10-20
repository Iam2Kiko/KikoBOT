const Discord = require('discord.js');
const play = require('./play');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = 'ě';

client.once('ready', () => {
    console.log('Bot Online');
})

client.login('login');

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'play') {
        play.execute(message, args).then(r => console.log('Finished promise!'));
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if(command === 'ping'){
            message.channel.send('pong!');
    }
    });
