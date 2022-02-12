let gamesDisplay = document.getElementById('gamesDisplay')

var uuid,gameInp

var openGames = []

var openGamesDisplay = ''

function createGame(){

	
	fetch('/city', {
		method: 'GET', // or 'PUT'

	})
	.then(response => response.json())
	.then(city => {
		console.log(city)
	
		gameInp = {
			"name":prompt('type game name',`Battle of ${city.city}`),
			"pass":prompt('type game password. leave empty for open game'),
			"color":prompt('what is your preffered color to play as. type "w" or "b"'),
		}
		if(!(gameInp.name == null || gameInp.pass == null || gameInp.color == null)){
			fetch('/createGame',{
				method:'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(new Game(gameInp.name,gameInp.pass,gameInp.color))
			})
			.then(response => response.json())
			.then(function(data){
				if(data.status == 'good'){
					console.log('game creation succeded')
					getOpenGames()
				}else{
					alert('name already exists. find a new one')
				}
			})
		}else{
			alert('game creation aborted')
		}

	})
}

function getOpenGames(){

	fetch('/opengames',{
		method:'POST',
	})
	.then(response => response.json())
  	.then(function(data){
			openGames = data.openGames
			console.log('updated games')

			openGamesDisplay = ''

			if(openGames.length != 0){
				for(i of openGames){
					openGamesDisplay += `<div>
					<a>Game: ${i.name} created. Waiting for ${Math.round((Date.now() - i.createTime )/60000)} minutes</a>
					<button onclick ="joinGame('${i.gameId}')">Join this game</button>
					</div>`
				}
			}else{
				openGamesDisplay = "<div><a>No joinable games. Why don't you make one?</a></div>"
			}

		gamesDisplay.innerHTML = openGamesDisplay
		window.setTimeout(getOpenGames,1000)
	})
}

function joinGame(gameId){
	alert(`joining game ${gameId}`)
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

	getOpenGames()
}


class Game{
	constructor(gameName, gamePass,color){
		this.pieces = [['wRook',0,7],['wBishop',1,7],['wKnight',2,7],['wKing',3,7],['wQueen',4,7],['wRook',7,7],['wBishop',6,7],['wKnight',5,7],['wPawn',0,6],['wPawn',1,6],['wPawn',2,6],['wPawn',3,6],['wPawn',4,6],['wPawn',5,6],['wPawn',6,6],['wPawn',7,6],['bRook',0,0],['bBishop',1,0],['bKnight',2,0],['bKing',3,0],['bQueen',4,0],['bRook',7,0],['bBishop',6,0],['bKnight',5,0],['bPawn',0,1],['bPawn',1,1],['bPawn',2,1],['bPawn',3,1],['bPawn',4,1],['bPawn',5,1],['bPawn',6,1],['bPawn',7,1]]
		this.turn = 'w'
		if(color == 'w'|| color == 'W'){
			this.white = uuid;
			this.black = null;
		}else{
			this.white = null;
			this.black = uuid;
		}
		
		this.black = undefined;

		this.name=gameName
		if(gamePass != ''){
			this.pass = gamePass
		}
		this.createTime =Date.now()
		
	}

	
}

