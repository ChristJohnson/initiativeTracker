
module.exports = {
	name: 'add',
	description: 'add character(s) to the count',
	help: 'add [label|tag] <initiative> <count>',
	execute(msg, args, encounter) {
		if (args.length > 2) {
			msg.channel.send(`added ${args[2]} ${args[0]}s to the encounter!`);
			encounter.addCharacters(args[2], args[0], args[1]);

			return encounter;
		}

		if (args.length < 2)
			args[1] = 0;

		msg.channel.send(`added ${args[0]} to the encounter!`);
		encounter.addCharacter(args[0], args[1]);
		

		return encounter
	}
}
