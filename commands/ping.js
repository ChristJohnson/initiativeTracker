module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args, encounter) {
		msg.channel.send('pong');
	},
};
