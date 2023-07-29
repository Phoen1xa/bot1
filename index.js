const { Client, GatewayIntentBits, Partials, Collection, ActivityType, Events,PermissionsBitField, AutditLogEvent, ChannelFlags, ChannelManager, Role, GuildVoice } = require('discord.js');



const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');

const { EmbedBuilder } = require("@discordjs/builders");

const logs = require("discord-logs");





const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

logs(client, {
    debug: true
})







client.commands = new Collection();
client.config = require('./config.json');

client.login(client.config.token)

//Hoşgeldin Embedi
// const hiEmbed = new EmbedBuilder()
//     .setTitle('**HOŞGELDİN**')
//     .setDescription("➔ Aramıza Hoşgeldin :wave:.Kayıt olarak sunucuya devam edebilrisin.İyi Eğlenceler.")
//     .setColor(0x0D9EAD3)
//     .addFields({ name: '**TXC**', value: '*➔ Sunucumuzda bir çok etkinlik ve etkinliklerin yanısıra bir takımımız mevcuttur.Hedefimiz yüksektir.Sunucuda bulunan* ***"Akademi"*** *Kategorisini okuyup Akademiye giriş yapabilirsiniz.Ana Kadro yakın zamanda duyurulucaktır.' })
//     .setTimestamp();

// client.on('guildMemberAdd', member => {
//     member.send({ embeds: [hiEmbed] }).catch(err => console.log(err));
// })

//Loglar







//Sese Sokmaya yarar
const { joinVoiceChannel } = require("@discordjs/voice");
const { name } = require('./Events/Client/ready');
client.on('ready', () => {
    joinVoiceChannel({
        channelId: "1134882414980776017",
        guildId: "1134815092320518154",
        adapterCreator: client.guilds.cache.get("1134815092320518154").voiceAdapterCreator
    });

    const activities = [
        'Diğer sosyalmedya hesaplaramızıda da göz atmayı unutmayın.',
        'Akademi Kategorisini okuyup bilgi sahibi olabilirsiniz',
        'Eğer bir şikayetiniz olursa "Destek" Kategorisinden şikayette bulunabilirsiniz',
        'Herhangi bir öneriniz olursa /öner komutunu kullanıp önerilerinizi oylamaya sunabilirsiniz.',
        'Başvuru durumlarınızı öğrenmek için Destek Talebi açabilirsiniz.'
    ];

    setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)];
        client.user.setPresence({ activities: [{ name: `${status}` }] });
    }, 5000

    );




});
