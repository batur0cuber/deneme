const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message) {
 
    const embed = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:sareki:812269724980871168> EVEN Bot | Kullanıcı Menüsü <a:sareki:812269724980871168>")
.setThumbnail("https://cdn.discordapp.com/emojis/812269725421666324.gif?v=1")
    .setDescription(`

**KULLANICI KOMUTLARI**
**»** **!afk** : AFK Komutlarını Gösterir.
**»** **!havadurumu <Şehir Yada Ülke>** : Havadurumunu Gösterir.
**»** **!saat** : Saati Gösterir.
**»** **!döviz <ülke>** : Dövüz Menüsünü Gösterir.
**»** **!tarih** : Tarihi Gösterir.
**»** **!yılbaşı** : Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.
**»** **!istatistik** : Botun İstatistiklerini Gösterir.
**»** **!ping** : Pinginizi Gösterir.
**»** **!sunucuresim** : Sunucu Resmini Gösterir.  
**»** **!çevir** : V11 Kodlarını V12 Çeviren Komuttur.   
**»** **!corona <ülke>** : Corono İstatistiklerini Gösterir.
**»** **!bug-bildir** : Hataları veya Bugları Bize Bildirisiniz.
**»** **!kullanıcı-bilgi** : Etiketlediğin / kendi profilin hakkında bilgi verir.

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
  name: 'yardım-kullanıcı', 
  description: 'Serverin iconunu gösterir',
  usage: 'yardım-kullanıcı'
};