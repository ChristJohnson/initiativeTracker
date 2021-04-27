exports.getNick = msg => {
	let member = msg.guild.member(msg.author);
        let nickname = member ? member.displayName : null;
	return nickname;
}
