const { getNick } = require('../nick.js');

module.exports = {
	name: 'join',
	description: 'for a player to join the encounter',
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
			(args.length > 0) ? args.shift() : 0, // initiative
			(args.length > 1) ? args.join(' ') : "specified at time of play"); // action
		msg.channel.send(`added ${nickname} to the initiative!`);
	}
}
