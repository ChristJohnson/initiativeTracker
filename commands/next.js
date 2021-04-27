module.exports = {
	name: 'next',
	description: 'to be used by the DM, cycles to the next in initiative and says their action, if they declared an action',
	help: 'next',
	execute(msg, args, encounter) {
		let turn = encounter.nextTurn()
		let c = encounter.characters[turn]
		let output = turn === -1
			? `\`\`\`(Bottom)\`\`\``
			: `**Turn**:\`\`\`[${c.initiative}] ${c.name}: *${c.action}*\`\`\``;

		msg.channel.send(output);
	}
}
