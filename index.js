require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
const standings = require('./standings')

const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', (msg) => {
	if (msg.content === '!Raid1') {
		msg.channel.send(standings.raidOneStringPartOne)
		msg.channel.send(standings.raidOneStringPartTwo)
	} else if (msg.content === '!Raid2') {
		msg.channel.send(standings.raidTwoStringPartOne)
		msg.channel.send(standings.raidTwoStringPartTwo)
	}
})
