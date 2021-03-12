const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL()() ? message.author.avatarURL()({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.glitch.com/e0fb4ccb-6b63-480b-a6ea-1ba3e7f3425e%2Fkurallar.gif?v=1608708467131');
hook.send(`\`${message.guild.name}\` **Sunucu Kuralları**

 ・   **\`Ağır\` ve \`kişi hedefli\` küfür kullanmayınız.**
 ・   **Özelden veya genelden \`reklam\` yapmayınız.**
 ・   **\`Flood\`, \`spam\` ve \`siyasi\`, \`cinsel\` muhabbet benzerlerini yapmayınız.**
 ・   **\`Irkçı\`, \`cinsiyetçi\`, \`homofobik\` davranmayınız,Üyeleri Rahatsız etmeyiniz.**
 ・    **Gereksiz yere \`spoiler\`, \`embed\` vs. kullanmayınız,etiket atmayınız.**
 ・    **Discord'un \`kullanım\` şartlarına uyunuz.**

   ** Yetkililer verecekleri ceza konusunda \`insiyatif\` kullanabilirler ve sunucu için zararlı olduğunu düşündükleri kişilere sebep belirtmeksizin yine aynı inisiyatifle ceza verebilirler.**


> \`Sunucuya Giren HERKES Okumuş Ve Kabul etmiş Sayılır.\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kurallar"],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};