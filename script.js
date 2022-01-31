let tArea = document.getElementById('tArea')


function getOpenGames(){

	fetch('/opengames',{method:'POST'})
	.then(response => response.json())
  .then(function(data){
		alert(JSON.stringify(data))
		tArea.value = JSON.stringify(data.openGames)
	})
  
}



console.log( getOpenGames() )