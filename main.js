let board = [
	["S", null, null, null, null],
	[null, "S", null, "S", null],
	["S", null, null, null, null],
	[null, "S", null, null, null],
	[null, null, "S", null, "S"],
];

let arrRow = ["one", "two", "three", "fourth", "five"];
let image = "";
let count = 0;

let img = document.createElement("img");
let p = document.createElement("p");

console.log("____", document.querySelector("#one"));

const onChange = (e) => {
	let state = "";
	let ele = document.getElementById(e.target.id);
	e.target.className == "barco"
		? (ele.src = "./img/ship.gif")
		: alert("intenta de nuevo");

	console.log("nada", e.target.id);
};

let printBoard = () => {
	for (i = 0; i < board.length; i++) {
		for (j = 0; j < board.length; j++) {
			// debugger;
			count++;
			let rowNow = arrRow[i];
			let pdivOne = document.getElementById(`${rowNow}`);

			// board[i][j] == "S"
			// 	? (image = "./img/barco.png")
			// 	: (image = "./img/mar.png");
			var myImage = new Image(100, 200);
			myImage.src = "./img/mar.png";
			myImage.id = count;

			board[i][j] == "S"
				? (myImage.className = "barco")
				: (myImage.className = "mar");

			pdivOne.appendChild(myImage);
			document.getElementById(`${count}`).addEventListener("click", onChange);
		}
	}

	console.log("_____________________");
};

let verificar = (x, y) => {
	if (board[x][y] == "S") {
		console.log("Le diste ");
		board[x][y] = null;
		printBoard();
	} else {
		console.log("fallaste cabron");
	}
};

printBoard();

verificar(3, 2);
