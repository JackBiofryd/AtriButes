class LocalStorage {
	setItem(itemName, value) {
		const JSONValue = JSON.stringify(value);

		localStorage.setItem(itemName, JSONValue);

		return value;
	}

	getItem(itemName) {
		const localData = localStorage.getItem(itemName);

		const value = JSON.parse(localData);

		return value;
	}
}

const storage = new LocalStorage();
