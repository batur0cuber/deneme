const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message) {
 
    const embed = new Discord.MessageEmbed()
        .setDescription("**SUNUCU ICONU**")
        .setImage(message.guild.iconURL({dynamic:true}))

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sunucuresim', 
  description: 'Serverin iconunu gösterir',
  usage: 'sunucuresim'
};