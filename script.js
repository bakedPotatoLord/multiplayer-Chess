let tArea = document.getElementById('tArea')

var uuid

var openGames = []

var openGamesDisplay = ''

function createGame(){
	fetch('/createGame',{
		method:'POST',
		headers: {
      'Content-Type': 'application/json',
			'uuid':uuid,
    },
		body:JSON.stringify(new game(prompt('type game name'),prompt('type game password. leave empty for open game'),prompt('what is your preffered color to play as. type "w" or "b"')))
		})
	.then(response => response.json())
  .then(function(data){
		openGames = data.openGames

		tArea.value = JSON.stringify(openGames)
	})
}

function getOpenGames(){

	fetch('/opengames',{
		method:'POST',
		headers: {
      'Content-Type': 'application/json'
    },
		body:	JSON.stringify({'uuid':uuid,})
		})
	.then(response => response.json())
  .then(function(data){
		openGames = data.openGames

		tArea.value = JSON.stringify(openGames)
	})
  
}

window.onload = function(){
	if(Cookies.get('uuid') == undefined){
		fetch('/uuid',{method:'GET'})
		.then(response => response.json())
		.then(function(data){
			Cookies.set('uuid', data.uuid)
			uuid = data.uuid
		})
	}else{
		uuid = Cookies.get('uuid')
	}
}

setInterval(getOpenGames,500)

class game{
	constructor(gameName, gamePass,color){
		this.pieces = [['wRook',0,7],['wBishop',1,7],['wKnight',2,7],['wKing',3,7],['wQueen',4,7],['wRook',7,7],['wBishop',6,7],['wKnight',5,7],['wPawn',0,6],['wPawn',1,6],['wPawn',2,6],['wPawn',3,6],['wPawn',4,6],['wPawn',5,6],['wPawn',6,6],['wPawn',7,6],['bRook',0,0],['bBishop',1,0],['bKnight',2,0],['bKing',3,0],['bQueen',4,0],['bRook',7,0],['bBishop',6,0],['bKnight',5,0],['bPawn',0,1],['bPawn',1,1],['bPawn',2,1],['bPawn',3,1],['bPawn',4,1],['bPawn',5,1],['bPawn',6,1],['bPawn',7,1]]
		this.turn = 'w'
		if(color == 'w'|| color == 'W'){
			this.white = uuid;
			this.black = undefined;
		}else{
			this.white = undefined;
			this.black = uuid;
		}
		
		this.black = undefined;

		this.name=gameName
		if(gamePass != ''){
			this.pass = gamePass
		}
	}

	
}

