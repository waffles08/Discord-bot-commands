module.exports = {
    name: 'poll',
    description: 'a poll command', 
    async execute(message, args, Discord){
    
    
        if(message.member.permissions.has("ADMINISTRATOR")){
        const { User } = require("discord.js");

                    const sayMessage = args.join(" "); 
                    message.delete().catch(err => console.log(err)); 
                    let embed = new Discord.MessageEmbed()
                        .setColor('#FFFFF')
                        .setTitle(`${message.author.tag} Asks:`)
                        .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/185/bar-chart_1f4ca.png`)
                        .setDescription(sayMessage);
        
                        const msg = await message.channel.send(embed);
                        await msg.react ('✅')
                        await msg.react ('❌')

                }
        else return message.reply("**hey**, you're not a admin. **you cannot use this command!**")
        message.channel.send(("this command was made by waffles on discord XD ( code sourced from https://github.com/waffles08/Discord-bot-commands/edit/main/poll.js )
    }
        }
        
