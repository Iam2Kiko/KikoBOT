const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!!!';

client.once('ready', () => {
    console.log('Bot Online');
})

client.login('OTAwMTY0NTMwMTc1MzczMzUy.YW9VjA.BCMwWB7v8v2iGrMuEE7DPkhMj30');

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if(command === 'ping'){
            message.channel.send('pong!');
    }
    });
