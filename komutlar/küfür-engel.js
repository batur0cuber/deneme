const Discord = require('discord.js');
const fs = require('fs');
exports.run = async (client, message) => {
  const db = require('quick.db');
    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');
    if(secenekler.length < 1) return message.reply(`**!küfür-engelle aç** veya **!küfür-engelle kapat** yazınz `);
  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`**!küfür-engelle aç** veya **!küfür-engelle kapat** yazınz `) 
    if (secenekler === "aç" || secenekler === "on") {    
    var i = db.set(`küfürE_${message.guild.id}`, "acik")    
          const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`Küfür Engeli Başarıyla açıldı\nKüfür engelini kapatmak isterseniz **!küfür-engel kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)
};
    if (secenekler === "kapat" || secenekler === "off") {
    db.delete(`küfürE_${message.guild.id}`)
        message.channel.send('Küfür engelleyici kapatıldı')

    };
}
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['küfür-engel'],
        permLevel: 4,
    kategori: "ayarlar",
    };
    exports.help = {
        name: 'küfür-engelle',
        description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
        usage: 'küfür-engelle <aç/kapat>',
    
    };