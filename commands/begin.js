const { Encounter } = require('../encounters.js');

module.exports = {
	name: 'begin',
	description: 'begins an encounter',
	execute(msg, args, encounter) {
		msg.channel.send("Encounter started, start adding characters!");
		return new Encounter(args.join(' '));
	}
}
