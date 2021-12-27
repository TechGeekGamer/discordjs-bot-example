const {Client} = require("discord.js");

const client = new Client({intents:[]});

client.on("ready", () => {
    console.log(`Ready as ${client.user.tag}`);
});

client.on("interactionCreate", (interaction) => {
    if(interaction.isApplicationCommand())
        interaction.reply({
            content:`Hey there!`
        });
});

client.login(process.env.TOKEN);