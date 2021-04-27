const fs = require('fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = {};

for (const file of commandFiles) {
	if (file === 'help.js') continue;
	const command = require(`./${file}`);
	commands[command.name] = command;
}

module.exports = {
	name: 'help',
	description: 'provides a list of commands',
	help: 'help',
	execute(msg, args, encounter) {
		output = '```';

		for (const key in commands) {
			const c = commands[key];
			output += `${c.name}: ${c.description}\n\tusage: ${c.help}\n\n`;

		}

		output += '```';

		msg.channel.send(output);
	}
}
