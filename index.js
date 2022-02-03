const express = require('express');
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

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
	  console.log(knownUsers)
})

//POST handler

app.post('/openGames', (req, res) => {

	res.send({"openGames":openGames,})

})

app.post('/creategame', (req, res) => {
	console.log(req.headers.cookie)
	if(knownUsers.includes(req.headers.cookie)){
		console.log('game created')

		
	}else{
		console.log('request from unverified sourze')
	}
	res.send('request recived')
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


