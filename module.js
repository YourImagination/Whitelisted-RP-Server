//Requirements
const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require("fs");
//Requirements
const prefix = "-";
client.on('ready', () => {
  console.log('Im online in current server, Whitelisted RolePlay Server, Developer!');
});

//Closed For Now
client.on('message', message => {
  if (message.content === prefix + "asfaesdfew"){
    
    var read = fs.readFileSync("./test.txt", "UTF-8");
    client.channels.get("388602839733239809").send(read);
    
    const embed = new Discord.RichEmbed()
    .setTitle('Announcement Status')
    .setAuthor('Whitelisted RP Bot', 'https://i.imgur.com/bbgfOXi.png')
    
    .setColor(0x996673)
    .setDescription('Current Status: Sent')
    .setFooter('©Whitelisted Realistic Roleplay', 'https://i.imgur.com/bbgfOXi.png')
    .setImage('https://i.imgur.com/bbgfOXi.png')
    message.channel.send({embed});
  }
  if(message.content === prefix + "asfgtrewa"){
    var write = fs.writeFileSync("./test.txt", string)
    
    writeFile()
  }

  if(message.content === prefix + "Commands"){
    const embed = new Discord.RichEmbed()
    .setTitle('Command Menu')
    .setAuthor('Whitelisted RP Bot', 'https://i.imgur.com/bbgfOXi.png')

    .setColor(0x996673)
    .setDescription('Moderation Section \n Information Section \n AAC Section')
    .setFooter('©Whitelisted Realistic Roleplay', 'https://i.imgur.com/bbgfOXi.png')
    .setImage('https://i.imgur.com/bbgfOXi.png')
    message.channel.send({embed});
  }

  if(message.content === prefix + "Moderation Section"){

    const embed = new Discord.RichEmbed()
    .setTitle('Moderation Menu')
    .setAuthor('Whitelisted RP Bot', 'https://i.imgur.com/bbgfOXi.png')

    .setColor(0x996673)
    .setDescription('Entities Value[0]')
    .setFooter('©Whitelisted Realistic Roleplay', 'https://i.imgur.com/bbgfOXi.png')
    .setImage('https://i.imgur.com/bbgfOXi.png')
    message.channel.send({embed});
  }

  if(message.content === prefix + "Information Section"){
    const embed = new Discord.RichEmbed()
    .setTitle('Information Menu')
    .setAuthor('Whitelisted RP Bot', 'https://i.imgur.com/bbgfOXi.png')
    
    .setColor(0x996673)
    .setDescription('Entities Value[0]')
    .setFooter('©Whitelisted Realistic Roleplay', 'https://i.imgur.com/bbgfOXi.png')
    .setImage('https://i.imgur.com/bbgfOXi.png')
    message.channel.send({embed});
  }

  if(message.content === prefix + "AAC Section"){
    let Character = message.guild.roles.find("name", "Application Accepters");
    if (message.member.roles.has(Character.id)) {
        const embed = new Discord.RichEmbed()
        .setTitle('Application Accepter Menu')
        .setAuthor('Whitelisted RP Bot', 'https://i.imgur.com/bbgfOXi.png')
        
        .setColor(0x996673)
        .setDescription('Accept - Accepts the user you target.')
        .setFooter('©Whitelisted Realistic Roleplay', 'https://i.imgur.com/bbgfOXi.png')
        .setImage('https://i.imgur.com/bbgfOXi.png')
    
        message.channel.send({embed});
    } else {
    message.author.sendMessage('You are not whitelisted')
  }

  if(message.content === prefix + "Accept"){
   
  }
}

});
//Login
client.login(process.env.Mzg4NTkzNzcwNzEyNjYyMDI2.DQvyYQ.sK97S9X9coRpJmXKz3DA3kmWoBU);
