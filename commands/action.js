const { getNick } = require('../nick.js');

module.exports = {
	name: 'action',
	description: 'to be called to declare your action',
	help: 'action [initiative] <action description>',
	execute(msg, args, encounter) {
		if (args.length < 1) {
			msg.channel.send('too little arguments, use `;help action` for assistance');
			return -1;
		}
		let nick = getNick(msg);
		encounter.characters.forEach( c => {
			if (c.name == nick) {
				c.init = args.shift();
				c.action = args.join(' ');
			}
		});
	}
}
