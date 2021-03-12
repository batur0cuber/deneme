const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:sareki:812269724980871168> EVEN Bot | Kullanıcı Menüsü <a:sareki:812269724980871168>")
.setThumbnail("https://cdn.discordapp.com/emojis/812269725421666324.gif?v=1")
    .setDescription(`

**»** **!yardım-nsfw** : NSFW Komutlarını Gösterir.

**»** **!yardım-eğlence** : Eğlence Komutlarını Gösterir.

**»** **!yardım-kullanıcı** : Kullanıcı Komutlarını Gösterir.

**»** **!yardım-yetkili** : Yetkili Komutlarını Gösterir.

**»** **!yardım-moderasyon** : Moderasyon Komutlarını Gösterir.

`) 
       .addField(`» EVEN Bot Bağlantıları`, `<a:donenmaviyildiz:810794964153139210>  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=795341279562432522&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/M5CeTAD4a9) **|** [İnternet Sitesi](https://evenbot.ml) <a:donenmaviyildiz:810794964153139210>`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0 
  };
                                       
  exports.help = {
    name: 'kullanıcı', 
    description: '',
    usage: 'yardım'
  };     