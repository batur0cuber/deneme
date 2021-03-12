const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message) {
 
    const embed = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:sareki:812269724980871168> EVEN Bot | Kullanıcı Menüsü <a:sareki:812269724980871168>")
.setThumbnail("https://cdn.discordapp.com/emojis/812269725421666324.gif?v=1")
    .setDescription(`

**Yetkili KOMUTLARI**
**»** **!ban** : Ban Komutlarını Gösterir.
**»** **!unban** : İd İle Kullanıcının Banını Kaldırırsınız.
**»** **!kapat** : O Kanalı Kilitlersiniz.
**»** **!banlist** : Sunucuda Banlananları Görürsünüz.
**»** **!aç** : O Kanalı Açarsınız.
**»** **!kicklog-kanal <#kanal>** : Kick Log Sistemini Açarsınız.
**»** **!sunucu-kur** : Basit Sunucu Kurar.
**»** **!kick** : Kullanıcıyı Atarsınız.
**»** **!kick-yetkili @rol** : Kick Atacak Rolü Ayarlarsınız.

`) 
       .addField(`» EVEN Bot Bağlantıları`, `<a:donenmaviyildiz:810794964153139210>  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=795341279562432522&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/M5CeTAD4a9) **|** [İnternet Sitesi](https://evenbot.ml) <a:donenmaviyildiz:810794964153139210>`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yardım-yetkili', 
  description: 'Serverin iconunu gösterir',
  usage: 'yardım-yetkili'
};