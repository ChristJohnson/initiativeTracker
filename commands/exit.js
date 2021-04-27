const { getNick } = require('../nick.js');

module.exports = {

	name: 'exit',
	description: 'for a player to exit the initiative',
	help: 'exit',
	execute(msg, args, encounter) {
		let nick = getNick(msg);
		encounter.removeCharacter(nick);

		msg.channel.send(`${nick} left the initiative`);
	}
};
