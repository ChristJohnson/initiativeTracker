const { Encounter } = require('../encounters.js');

module.exports = {
	name: 'begin',
	description: 'reset encounter',
	help: 'begin <label>',
	execute(msg, args, encounter) {
		msg.channel.send("Encounter started, start adding characters!");
		return new Encounter(args.join(' '));
	}
}
