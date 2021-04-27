function Character(name, initMod=0, action='') {
	this.name = name;
	this.init = initMod;
	this.initiative = 0;
	this.takenTurn = false;
	this.roll = () => { this.initiative = randomInt(19) + Number(this.init) + 1; }
	this.action = "";
	this.addAction = (initiative, actionPortion) => {
		this.init = initiative;
		this.action = actionPortion;
	};
}

function Encounter(title='') {
	this.title = title;
	this.characters = [];
	this.addCharacter = (name, mod=0, action='') => {
		this.characters.push(new Character(name, mod, action));
	}
	this.addCharacters = (qty, name, mod=0) => {
		while (qty-- > 0)
			this.characters.push(new Character(name + qty, mod))
	}
	this.removeCharacter = name => {
		let index = this.characters.findIndex(c => c.name == name);
		if (index == -1)
			return index
		this.characters.splice(index, 1);
		return index;
	}
	this.newRound = () => {
		// roll for everyone
		this.characters.forEach(c => {c.roll(); c.takenTurn = false;})
		// sort this.characters in terms of those rolls
		this.characters.sort((a, b) => (a.initiative > b.initiative) ? -1 : 1);
	}
	this.nextTurn = () => {
		let index = this.characters.findIndex(c => !c.takenTurn);
		if (index == -1) {
			return index
		}
		this.characters[index].takenTurn = true;
		return index;
	}
}

function randomInt(max) {
	return Math.floor(Math.random() * max);
}


exports.Character = Character;
exports.Encounter = Encounter;
