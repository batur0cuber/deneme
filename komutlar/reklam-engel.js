const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
const code = message.mentions.channels.first() || message.channel
const codeshare = args[0]
if (!codeshare) return message.reply(`Reklam engel sistemini açmak için **reklam-engel aç #kanal** veya **reklam-engel aç** yazmalısın!`)
 
  if (codeshare == 'aç') { 
  let açıkkapalı = await db.fetch(`reklamEngelcodeshare_${code.id}`)
  if(açıkkapalı) return message.reply(` <a:tick:810153019656110102> Zaten reklam engel bu kanalda/belirttiğiniz kanalda aktif! <a:tick:810153019656110102>`)
    
db.set(`reklamEngelcodeshare_${code.id}`,'açık')
message.reply(`<a:tick:810153019656110102> Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda aktif edildi! <a:tick:810153019656110102>`)
  }
  
  if (codeshare == 'kapat') {
  let açıkkapalı = await db.fetch(`reklamEngelcodeshare_${code.id}`)
  if(!açıkkapalı) return message.reply(`<a:tick:810153019656110102> Zaten Reklam engel bu kanalda/belirttiğiniz kanalda deaktif! <a:tick:810153019656110102>`)
    
db.delete(`reklamEngelcodeshare_${code.id}`)
message.reply(`<a:tick:810153019656110102> Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda deaktif edildi! <a:tick:810153019656110102> `)
}
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'reklam engellemeyi açar',
  usage: 'CodeShare'
}