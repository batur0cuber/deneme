const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime El Hareketi Çekeceğimi Yazmalısın**');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana El Hareketi Çekti!**')
    .setImage(`https://media1.tenor.com/images/9b57e87d8b65358bc6fe773162489da1/tenor.gif?itemid=7954667`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};