class DOM {
	constructor() {
		this.atributeList = document.querySelector('.atributes-list');
		this.initEventListeners();
	}

	initEventListeners() {
		const displayFormBtn = document.querySelector('.new-atribute');
		displayFormBtn.addEventListener('click', this.toggleNewAtrForm);

		const form = document.querySelector('.atributes-form');
		form.addEventListener('submit', this.toggleNewAtrForm);
	}

	createAtributeItem(tagName, startingValue) {
		const atItem = this.createElement('div', ['at-item']);

		const decreaseBtn = this.createElement(
			'button',
			['at-decrease'],
			'-0.1'
		);
		const increaseBtn = this.createElement(
			'button',
			['at-increase'],
			'+0.1'
		);
		increaseBtn.setAttribute(
			'onclick',
			`app.changeAtributeValue('${tagName}', ${0.1})`
		);
		decreaseBtn.setAttribute(
			'onclick',
			`app.changeAtributeValue('${tagName}', ${-0.1})`
		);

		const atValue = this.createElement(
			'span',
			['at-number'],
			startingValue
		);
		const atContent = this.createElement(
			'div',
			['at-content'],
			`${tagName}:`
		);
		atContent.appendChild(atValue);

		atItem.appendChild(decreaseBtn);
		atItem.appendChild(atContent);
		atItem.appendChild(increaseBtn);

		this.atributeList.appendChild(atItem);
		return atItem;
	}

	createElement(el, classes, innerText) {
		const element = document.createElement(el);

		if (Array.isArray(classes) && classes.length) {
			element.classList = classes;
		}

		if (innerText) {
			this.addTextToElement(element, innerText);
		}

		return element;
	}

	addTextToElement(element, text) {
		const textNode = document.createTextNode(text);
		element.appendChild(textNode);
	}

	reloadAtributesList(atributes) {
		this.atributeList.innerHTML = '';

		atributes.forEach(atr => {
			const atrValue = atr.value.toFixed(1);

			this.createAtributeItem(atr.tag, atrValue);
		});
	}

	toggleNewAtrForm() {
		document.querySelector('.atributes-form').classList.toggle('hidden');
		document.querySelector('.new-atribute').classList.toggle('hidden');
	}
}

const dom = new DOM();
