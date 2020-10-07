let pokemonList = [
	{
		name: "Pidgey",
		height: "1' 00\"",
		types: ["normal", "flying"],
	},
	{
		name: "Pidgeotto",
		height: "3' 07\"",
		types: ["normal", "flying"],
	},
	{
		name: "Pidgeot",
		height: "4' 11\"",
		types: ["normal", "flying"],
	},
];

for (let i = 0; i < pokemonList.length; i++) {
	let convertToMeters = function (height) {
		let feet = Number(pokemonList[i].height.match(/(\d+)'/)[1]);
		let inches = Number(pokemonList[i].height.match(/(\d\d)"$/)[1]);
		return ((feet * 12 + inches) / 39.37).toFixed(2);
	};
	if (convertToMeters(pokemonList[i].height) < 1.25) {
		document.write(
			`<h1>${pokemonList[i].name} has a height of ${convertToMeters(
				pokemonList[i].height
			)} meters</h1>`
		);
	} else {
		document.write(
			`<h1>${pokemonList[i].name} has a height of ${convertToMeters(
				pokemonList[i].height
			)} meters - Wow, that's big!</h1>`
		);
	}
}
