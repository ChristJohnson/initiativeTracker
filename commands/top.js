module.exports = {
	name: 'top',
	description: 'rerolls everyone\'s initiative and resets play to the top of the round',
	help: 'top',
	execute(msg, args, encounter) {
		encounter.newRound()
		let output = encounter.title + '\n```\n';
                for (let i = 0; i < encounter.characters.length; i++) {
                        output += `${i + 1}. ` + encounter.characters[i].name + "\n"
                }
                if (encounter.characters.length == 0)
                        output += "(None)";
                output += '```';
                msg.channel.send(output);
	}
}
