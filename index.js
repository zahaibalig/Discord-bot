const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    const inputChannelId = 1108233079698501673; 
    const outputChannelId = 1108233125496115230;    
  
    // Only listen to messages in the input channel
    if (message.channel.id === inputChannelId) {
        //   if (message.author.bot) return;
        if (message.content === 'Hi') {
            message.reply('Hello! I am a Alon Musk!');
        }
        // Find the output channel
        const outputChannel = client.channels.cache.get(outputChannelId);
        // If the output channel was found
        if (outputChannel) {
        // Send the same message to the output channel
            outputChannel.send(message.content);
        } else {
            console.log('Output channel not found');
        }
    }
  });

// client.on('messageCreate', message => {
//     if (message.content === 'Hi') {
//         message.reply('Hello! I am a Alon Musk!');    
//     }
// });

client.login('MTEwODIyNTUzMTY0OTk5NDc1Mw.G5s5pw.SGYIzIgHzqKLuBtbIUK3fXBIrXC6UPoS2GQ_cY');
