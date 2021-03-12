const Discord = require('discord.js');
const useful = require('useful-tools')

exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const tarih = new Date()
 
  const arrifentembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL({dynamic : true}))
  .addField("Tarih", useful.tarih(tarih, 'G A Y'), true)
  .addField("Gün", useful.tarih(tarih, 'g'), true)
  .setThumbnail("https://i.sozcu.com.tr/wp-content/uploads/2019/10/27/iecrop/saat-kac_16_9_1572175720.jpg")
  .setFooter("Tarih | Tarih", client.user.avatarURL({dynamic : true}))
  return message.channel.send(arrifentembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tarih',
  description: 'Tarihi gösterir.',
  usage: 'tarih'
};