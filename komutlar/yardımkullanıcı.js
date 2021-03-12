const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message) {
 
    const embed = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:sareki:812269724980871168> EVEN Bot | Kullanıcı Menüsü <a:sareki:812269724980871168>")
.setThumbnail("https://cdn.discordapp.com/emojis/812269725421666324.gif?v=1")
    .setDescription(`

**Moderasyon KOMUTLARI**
**»** **!sil** : Belirtilen Mesaj Sayısı Kadar Siler. 
**»** **!oylama** : Oylama Yaparsınız. 
**»** **!mute** : Mute Komutlarnı Gösterir.
**»** **!snipe** : Son Silinen Mesajı Gösterir Gösterir.
**»** **!oylama** : Oylama Yaparsınız.
**»** **!kurallar** : Hazır Kurallarını Atar.
**»** **!unmute** : Kullanıcının Mutesini Kaldırırsınız.
**»** **!nuke** : Belirtilen Kanalı Tüm Yazılaraı Filan Temizler.
**»** **!küfür-engel** : Küfür Engel İle Komutlar.
**»** **!gç-ayarla #kanal** : HG-BB Resimli. 
**»** **!gç-kapat** : HG-BB Kapatır. 
**»** **!yavaşmod <süre>** : Yavaş Mod Aktifleştirirsiniz O Kanalda. 
**»** **!çekilş** : Çekiliş Komutlarına Bakarsınız.
**»** **!yaz <istediğin yazı>** : Bota İstediğiniz Yazıyı Yazdırısınız.
**»** **!say** : Sunucu Ve Ses İStatiklerine Bakarsınız Bakarsınız.

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
  name: 'yardım-moderasyon', 
  description: 'Serverin iconunu gösterir',
  usage: 'yardım-moderasyon'
};