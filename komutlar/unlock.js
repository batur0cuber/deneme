const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`<a:oksagbeyaz:814085098487939083> Channel ${channel} KANALI YAZILABİLİR HALE GETİRİLDİ. <a:oksolbeyaz:814085098743267348>`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Açan Kişi '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(channel.name+' KANALI YAZILABİLİR HALE GETİRİLDİ.')
.setDescription(`Mods had to unlock this channel.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aç"],
  permLevel: 0
};
 
exports.help = {
  name: 'unlock'
};