const { getNick } = require('../nick.js');

module.exports = {
	name: 'join',
	description: 'join the encounter',
	help: 'join <initiative> <action>',
	execute(msg, args, encounter) {
		let nickname = getNick(msg)
		for (const c of encounter.characters) {
			if (c.name == nickname) {
				msg.channel.send("you're already in the initiative!");
				return;
			}
		}
		encounter.addCharacter(nickname,
			(args.length > 0) ? args[0] : 0,
			(args.length > 1) ? args.join(' ') : "specified at time of play");
		msg.channel.send(`added ${nickname} to the initiative!`);
	}
}
