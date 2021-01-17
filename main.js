
let arrDiv = ["one", "two", "three", "fourth", "five"];
let image = "";
let count = 0;
let turn = true;
let img = document.createElement("img");
let p = document.createElement("p");
let person;

let puntaje_1 = 0;
let puntaje_2 = 0;

let stateTurno = true;

let jugador_1 = document.getElementById('first_player')
let jugador_2 = document.getElementById('second_player')	

let namePuntaje_1 = document.getElementById('person_1')
let namePuntaje_2 = document.getElementById('person_2')	

let total_turnos = 0;
 
 
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
	 var instances = M.Modal.init(elems);	 	 
  });



const countMoves = () => {
	(stateTurno = !stateTurno)
  ele = document.getElementById('turn');
	turn = !turn;
	
	ele.innerHTML = ` ${turn == true
		? 	(person = `${jugador_1.value}`)
		:		(person = `${jugador_2.value}` )} `;
 

	puntajePlayer_1 = document.getElementById('puntaje_1');	
	puntajePlayer_1.innerHTML = puntaje_1
	
	puntajePlayer_2 = document.getElementById('puntaje_2');	
	puntajePlayer_2.innerHTML = puntaje_2	
}



const initNames = () => {
	let firstPerson = document.getElementById('turn');	
	firstPerson.innerHTML 	= `${jugador_1.value}`
	namePuntaje_1.innerHTML = `${jugador_1.value}`
	namePuntaje_2.innerHTML = `${jugador_2.value}`	 
}
 

const increaseScore = () => {
	console.log("****************************+");
	console.log("stateTurno",stateTurno); 
	

	stateTurno == true ? puntaje_1 =puntaje_1+ 100 : puntaje_2=puntaje_2 + 100
 
	tot_puntaje_1 = document.getElementById('puntaje_1')
	tot_puntaje_1.innerHTML=puntaje_1	

	tot_puntaje_2 = document.getElementById('puntaje_2')	
	tot_puntaje_2.innerHTML=puntaje_2

}


const annouceWinner = () => {
	console.log("namePuntaje_1",jugador_1.value);
	puntaje_1 > puntaje_2 
	?M.toast({ html: `termino el juego, GANO  ${jugador_1.value}`  })
		: M.toast({ html: `termino el juego, veamos el marcador ${jugador_2.value}` })
}

const onChange = (e) => {		
	console.log("______________________________________________________");
	
	console.log("total_turnos",total_turnos);
	
	let ele = document.getElementById(e.target.id);
	e.target.className == "barco"
		? ((ele.src = "./img/ship.gif"),(increaseScore()),(total_turnos++))
		: ((ele.src = "./img/bad.gif"),(total_turnos++),
			countMoves()) 
	
	total_turnos == 25
		? annouceWinner	() 
		: ""
	
	console.log("total_turnos",total_turnos);
	
};

const createBoard = () => {
	var board = [],
		coin;

	for (let i = 0; i < 5; i++) {
		board[i] = [];

		for (let j = 0; j < 5; j++) {
			coin = Math.round(Math.random() * 3);
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

			var myImage = new Image(200, 100);
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
 

printBoard(createBoard());

