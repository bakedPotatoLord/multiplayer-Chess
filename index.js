const express = require('express');
var bodyParser = require('body-parser')
const app = express();

//app.use(bodyParser.json)

const bannedFiles = []
const port = 3000

var openGames = [1,2,3]

var  games =[]

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
});

app.get('/game', (req, res) => {
  res.sendFile(__dirname+'/game/game.html')
});

//POST handler

app.post('/openGames', (req, res) => {

res.send({"openGames":openGames,})
})

app.post('/creategame', (req, res) => {
res.send({})
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
