module.exports = {
	name: 'next',
	description: 'to be used by the DM, cycles to the next in initiative, sending a message in the chat--will also notify if there is no initiative left',
	help: 'next',
	execute(msg, args, encounter) {
		let output = encounter.nextTurn()

		if (output == -1)
			msg.channel.send(`It is currently the bottom of the initiative, please call \`;top\` to reset the turn`);
		else
			msg.channel.send(`It is currently ${encounter.characters[output].name}'s turn`);
	}
}
