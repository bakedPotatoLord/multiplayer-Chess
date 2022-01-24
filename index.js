const express = require('express');

const app = express();

const bannedFiles = []

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
});

app.get('*', (req, res) => {
	if(!bannedFiles.includes(req.url)){
  res.sendFile(__dirname+req.url)
	}
	console.log('requested '+req.url)
});

app.listen(3000, () => {
  console.log('server started');
});
