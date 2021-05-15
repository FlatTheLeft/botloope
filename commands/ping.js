const Discord = require('discord.js')
const { prefix } = require('../config.json');

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }
}
