const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// invitation link : https://discordapp.com/api/oauth2/authorize?client_id=855129296166584342&permissions=8&scope=bot

client.login(config.token);

client.once("ready", () => {
    console.log("Le WildBot est en route !")
    client.user.setActivity("Surveille les Wilders", {type: "STREAMING", url: "https://www.twitch.tv/lonelycrow_"});

    const id = "855136058277363743"; // Put the channel id here
    const messageChannel = client.channels.cache.find(channel => channel.id === id);
    const messages = [
        "Hello",
        "How",
        "Are",
        "You",
        "?"
    ]
    let i = 0;

    const sendMessagesAtInterval = () => {
        messageChannel.send(messages[i]);
        i++;
    }
    const interval = setInterval(() => {
        sendMessagesAtInterval()
        if(i >= messages.length) {
            clearInterval(interval)
            console.log("Il n'y a plus aucun message à envoyer");
            i = 0;
        }
    }, 5000);
});
