const express = require('express');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');



const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

fs.readFile('cities.json', 'utf8', function(err, data){	
	// Save the file content
	cities = JSON.parse(data)
});

const bannedFiles = []
const port = 3000

var temp

var knownUsers = []

var openGames = []

var  games =[];


function getCity(){
	return cities[Math.floor(Math.random()*cities.length)].name
}

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
});

app.get('/game', (req, res) => {
  res.sendFile(__dirname+'/game/game.html')
});

app.get('/uuid',(req, res) => {
	temp = uuidv4()
	knownUsers.push(temp)
  	res.send({'uuid':temp})
	  console.log(knownUsers)
})

app.get('/city',(req, res) => {
	res.send({'city':getCity()})
  //res.send({'city':getCity()})
})

//POST handler

app.post('/openGames', (req, res) => {
	//return open games
	res.send({"openGames":openGames,})
})

app.post('/creategame', (req, res) => {
	temp = req.body
	if(!gameNameUsed(temp.name)){
		
		temp.gameId = uuidv4()
		openGames.push(temp)

		res.send({status:'good'})
		console.log('game created')
	}else{
		res.send({status:'name already exists'})
		console.log('name already exists')
	}
})



app.get('*', (req, res) => {
	if(!bannedFiles.includes(req.url)){
  res.sendFile(__dirname+req.url)
	}
	console.log('requested '+req.url)
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});


function gameNameUsed(name){
	for(i of openGames){
		if(i.name == name){
			return true
		}
	}
	return false
}