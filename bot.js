const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.js');
const encounters = require('./encounters.js');

/*** globals ***/
const client = new Discord.Client();

var prefix = config.prefix;


/*** command collection ***/
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	log(`setting command name ${command.name} to ${command} by the file, ${file}`);
	client.commands.set(command.name, command);
}

/*** event handlers ***/

client.once('ready', () => console.log("I am ready"))

var encounter = new encounters.Encounter();

client.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	log(command);

	if (!client.commands.has(command)) return;

	try {
		let output = client.commands.get(command).execute(msg, args, encounter);

		if (output instanceof encounters.Encounter)
			encounter = output;

		log(encounter)
	} catch (err) {
		console.error(err);
		msg.reply(`Error executing command! Error: ${err.name}`);
	}
});


client.login(config.token);

/*** helper functions ***/

function log(msg) {
	if (config.debug) {
		console.log(msg)
	}
}
