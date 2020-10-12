let pokemonRepository = (function () {
	let pokemonList = [
		{
			name: "Pidgey",
			height: "1' 00\"",
			types: ["grass", "flying"],
		},
		{
			name: "Pidgeotto",
			height: "3' 07\"",
			types: ["fire", "flying"],
		},
		{
			name: "Pidgeot",
			height: "4' 11\"",
			types: ["poison", "flying"],
		},
	];
	function checkKeys(item) {
		let itemKeys = Object.keys(item);
		let comparisonArray = ["name", "height", "types"];
		for (let i = 0; i < itemKeys.length; i++) {
			if (itemKeys[i] !== comparisonArray[i]) {
				return false;
			}
		}
		return true;
	}

	function add(item) {
		if (typeof item == "object" && checkKeys(item)) {
			pokemonList.push(item);
		} else {
			console.log(
				"Please input an Object data type with the required properties!!!"
			);
		}
	}
	// Sammy's solution
	// function add(pokemon) {
	// 	if (
	// 	  typeof pokemon === "object" &&
	// 	  "name" in pokemon &&
	// 	  "height" in pokemon &&
	// 	  "types" in pokemon
	// 	) {
	// 	  repository.push(pokemon);
	// 	} else {
	// 	  console.log("pokemon is not correct");
	// 	}
	//   }

	function getAll() {
		return pokemonList;
	}
	function findByName(userNameInput) {
		let result = pokemonList.filter(
			(pokemon) => pokemon.name === userNameInput
		);
		if (result.length === 0) {
			return `There is no such pokemon by the name of ${userNameInput} in this repository!`;
		} else {
			return result;
		}
	}
	function addListItem(pokemon) {
		let listOfPokemons = document.querySelector(".pokemon-list");
		let listItem = document.createElement("li");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.classList.add("button-template");
		listItem.appendChild(button);
		listOfPokemons.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		findByName: findByName,
		addListItem: addListItem,
	};
})();

pokemonRepository.getAll().forEach((pokemon) => {
	pokemonRepository.addListItem(pokemon);
});

// Code from tasks 4 and 5
// ----------------------------------------------------
// pokemonRepository.getAll().forEach((pokemon) => {
// 	let feet = Number(pokemon.height.match(/(\d+)'/)[1]);
// 	let inches = Number(pokemon.height.match(/(\d\d)"$/)[1]);
// 	let total = ((feet * 12 + inches) / 39.37).toFixed(2);
// 	let size;

// 	if (total < 1) {
// 		size = "It's a small pokemon.";
// 	} else if (total >= 1 && total < 1.25) {
// 		size = "This is a medium size pokemon.";
// 	} else {
// 		size = "Wow, that's big!";
// 	}

// 	document.write(
// 		`<h1>${pokemon.name} has a height of ${total} meters - ${size}</h1>`
// 	);
// });

// Code from first 3 tasks
// ---------------------------------------------------
// for (let i = 0; i < pokemonList.length; i++) {
// 	let convertToMeters = function (height) {
// 		let feet = Number(pokemonList[i].height.match(/(\d+)'/)[1]);
// 		let inches = Number(pokemonList[i].height.match(/(\d\d)"$/)[1]);
// 		return ((feet * 12 + inches) / 39.37).toFixed(2);
// 	};
// 	if (convertToMeters(pokemonList[i].height) < 1.25) {
// 		document.write(
// 			`<h1>${pokemonList[i].name} has a height of ${convertToMeters(
// 				pokemonList[i].height
// 			)} meters</h1>`
// 		);
// 	} else {
// 		document.write(
// 			`<h1>${pokemonList[i].name} has a height of ${convertToMeters(
// 				pokemonList[i].height
// 			)} meters - Wow, that's big!</h1>`
// 		);
// 	}
// }
