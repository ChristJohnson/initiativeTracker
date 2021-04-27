module.exports = {
	name: 'remove',
	description: 'removes a label from play',
	help: 'remove [label]',
	execute(msg, args, encounter) {
		let output = ``;
		if (args.length < 1)
			output = 'what am I supposed to remove?';
		else {
			encounter.removeCharacter(args[0]);

			output = `removed ${args[0]} from the initiative`;
		}

		msg.channel.send(output);

	}
}
