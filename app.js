class App {
	constructor() {
		this.init();
	}

	init() {
		this.atributes = storage.getItem('atributes') || [];
		dom.reloadAtributesList(this.atributes);

		console.log(this.atributes);
		this.initEventListeners();
	}

	initEventListeners() {
		const form = document.querySelector('.atributes-form');
		form.addEventListener('submit', e => this.addNewAtribute(e));
	}

	changeAtributeValue(tag, value) {
		value = parseFloat(value);

		console.log(this.atributes, tag);
		const atribute = this.atributes.find(atr => atr.tag === tag);
		if (!atribute) return;

		atribute.value += value;

		storage.setItem('atributes', this.atributes);
		dom.reloadAtributesList(this.atributes);

		return atribute.value;
	}

	addNewAtribute(e) {
		e.preventDefault();

		const inputField = document.querySelector('.input');

		const newAtrTag = inputField.value;

		if (!newAtrTag || newAtrTag.length === 0) return;

		this.atributes.push({
			tag: newAtrTag,
			value: 0
		});

		dom.reloadAtributesList(this.atributes);
	}
}

const app = new App();
