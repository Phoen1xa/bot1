const {EmbedBuilder} = require("discord.js")
const {Client, client} = require("discord.js")

module.exports = {
    name:"messageCreate",
    async execute(message, client) {
        if(message.author.bot) return;

        //reklam sistemi
        if(message.content.includes("https://") || message.content.includes("http://") || message.content.includes("discord.gg")) {
            message.delete();

            const deleteEmbed = new EmbedBuilder()
            .setTitle("Link algılandı")
            .setDescription(`**${message.author}** , maalesef link göndermek için izniniz yok. `)
            .setColor("Red")
            .setFooter({text: 'Team TXC', iconURL:client.user.displayAvatarURL()})

            message.channel.send({ embeds: [deleteEmbed]})
        }

        //anti küfür sistemi
        let words = ["amk","aq","sik","taşşak","çük","meme","sikerim","sikiş","amınakoyayım","amına","aminakoyayım","göt","yarrak","am","daşşak"]

        let foundInText = false;

        for ( let i in words) {
            if(message.content.toLowerCase().includes(words[i].toLowerCase())) foundInText = true;
        }

        if(foundInText) {

            const küfürembed = new EmbedBuilder()
            .setTitle("Küfür algılandı")
            .setDescription(`**${message.author}** , Küfür etmek yasak `)
            .setColor("Red")
            .setFooter({text: 'Team TXC', iconURL:client.user.displayAvatarURL()})

            message.delete();
            message.channel.send({embeds: [küfürembed]})
        }

        


    }
}