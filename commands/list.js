module.exports = {
	name: 'list',
	description: 'lists people in initiative',
	help: 'list',
	execute(msg, args, encounter) {
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
