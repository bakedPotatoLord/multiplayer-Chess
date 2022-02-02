const express = require('express');
const { v4: uuidv4 } = require('uuid');

var bodyParser = require('body-parser')
const app = express();

//app.use(bodyParser.json)

const bannedFiles = []
const port = 3000

var knownUsers = []

var openGames = [1,2,3]

var  games =[]

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
})

//POST handler

app.post('/openGames', (req, res) => {
	/*
	if(knownUsers.includes(req.body.uuid )){
		res.send({"openGames":openGames,})
		console.log(`request for open games `)
	}
	*/
})

app.post('/creategame', (req, res) => {

res.send(req.body)
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


