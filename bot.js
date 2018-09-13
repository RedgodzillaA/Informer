// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

/////////////////////////////////////////
//////STEP 1. Notification for Bot///////
/////////////////////////////////////////

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   });
//////////////END STEP 1//////////////////////
 
///////////////////////////////////////////// 
////STEP 2. Send message about new member////
/////////////////////////////////////////////

////Send message in main chat/////
///Join to main channel and role Archer/////
client.on("guildMemberAdd", member => {
	member.guild.channels.find("name", "general-chat").send(`
	🔔You will not believe your eyes, the great and venerable **Archer ${member}**, joined us.
    *${member},please read my Welcome letter sent to you personally.*
	`); 
    member.addRole('489413256683978752').catch(console.error);
}); 
                    
///Leave server/////
client.on("guildMemberRemove", member => {
	member.guild.channels.find("name", "general-chat").send(`
	☠️ **${member}** could not stand the blow in the back and left us!
	`); 
}); 

////Send Personal message/////
client.on('guildMemberAdd', member => {
    member.send(`
	🔥  **Welcome on board BoA!**  🔥
    Nice to see new members in our game server. 
    If you Novice and have any questions you may ask it on #general-chat channel, but first read and see two channels:
    **#play-tips** and **#youtube-video**, 
    there you'll find the answers and the video on the most popular questions in the game.
    I wish you a pleasant game and quick wins!
	`);

 console.log(`New User "${member.user.username}" has joined "${member.guild.name}"`);
	   });

/* //Time to Raid//
client.on("guildMemberRemove", member => {
	member.guild.channels.find("name", "general").send(`:bow_and_arrow: **Welcome** ${member} to the server, has left the server! :heart: `); 
});  */

////////////////////END STEP 2///////////////////////////

///////////////////////////////////////////////////////// 
////STEP 3. Add default Role "Archer" to all new member////
/////////////////////////////////////////////////////////


//////////////////END STEP 3/////////////////////////
	
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot add in Heroku
