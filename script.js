let tArea = document.getElementById('tArea')

var openGames = []

var openGamesDisplay = ''

function getOpenGames(){

	fetch('/opengames',{method:'POST'})
	.then(response => response.json())
  .then(function(data){
		openGames = data.openGames

		tArea.value = JSON.stringify(openGames)
	})
  
}

window.onload = function{
	

}







setInterval(getOpenGames,500)

