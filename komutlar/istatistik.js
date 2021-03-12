const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .addField("**<a:mavitik:810788147037995019> __Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("**<a:mavitik:810788147037995019> __Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("**<a:mavitik:810788147037995019> __Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("**<a:mavitik:810788147037995019> __Aktiflik__**", `${payidarzaman}`, true)
    .addField("**<a:vds:810153020469674015>  __Node.JS Versiyon__**", `${process.version}`, true)
    .addField("**<a:donenmaviyildiz:810794964153139210> __Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("*<a:sonsuzlukkirmizi:810794961377034241> __Discord.JS__**", `${Discord.version}`, true)
    .addField("**<a:turkey:810153020565356567> __Konum__**", `Türkiye :flag_tr:`, true)
    .addField("**<:developer:810153019278491678> __Developer__**", `<@791014151698513941>`, true)

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'bot-bilgi', 'botbilgi'],
  permLevel: 0
};

exports.help = {
  name: "is",
  description: "is",
  usage: "is"
};