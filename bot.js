const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("536302457014452226")
setInterval(function() {
channel.send(`فكك ملكش فية :) :* :)`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
