// let board = [
// 	["S", null, null, null, null],
// 	[null, "S", null, "S", null],
// 	["S", null, null, null, null],
// 	[null, "S", null, null, null],
// 	[null, null, "S", null, "S"],
// ];

let arrDiv = ["one", "two", "three", "fourth", "five"];
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
		: (ele.src = "./img/bad.gif")
};

const createBoard = () => {
	var board = [],
		coin;

	for (let i = 0; i < 5; i++) {
		board[i] = [];

		for (let j = 0; j < 5; j++) {
			coin = Math.round(Math.random() * 3);
			console.log("coin", coin);

			coin == [1] ? (board[i][j] = "S") : (board[i][j] = "null");
		}
	}
	return board;
};

let printBoard = (board) => {
	for (i = 0; i < board.length; i++) {
		for (j = 0; j < board.length; j++) {
			count++;
			let rowNow = arrDiv[i];
			let newDiv = document.getElementById(`${rowNow}`);

			var myImage = new Image(100, 200);
			myImage.src = "./img/mar.png";
			myImage.id = count;

			board[i][j] == "S"
				? (myImage.className = "barco")
				: (myImage.className = "mar");

			newDiv.appendChild(myImage);
			document.getElementById(`${count}`).addEventListener("click", onChange);
		}
	}
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

printBoard(createBoard());
