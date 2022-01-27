let c = document.getElementById('c')
var ctx = c.getContext('2d')

const cw = 400;
const ch = 400
c.width = cw;
c.height = ch;

var i;
var i0;

var game={
	'turn':'w',
	
}

var mouse = {
		'x':null,
		'y':null,
}

var pieces={
	'img':document.getElementById('pieces'),

	'selectedPiece':null,

	'blackPieces':['bRook','bBishop','bKnight','bKing','bQueen','bPawn'],
	'whitePieces':['wRook','wBishop','wKnight','wKing','wQueen','wPawn'],

	'pieces':[['wRook',0,7],['wBishop',1,7],['wKnight',2,7],['wKing',3,7],['wQueen',4,7],['wRook',7,7],['wBishop',6,7],['wKnight',5,7],['wPawn',0,6],['wPawn',1,6],['wPawn',2,6],['wPawn',3,6],['wPawn',4,6],['wPawn',5,6],['wPawn',6,6],['wPawn',7,6],
	['bRook',0,0],['bBishop',1,0],['bKnight',2,0],['bKing',3,0],['bQueen',4,0],['bRook',7,0],['bBishop',6,0],['bKnight',5,0],['bPawn',0,1],['bPawn',1,1],['bPawn',2,1],['bPawn',3,1],['bPawn',4,1],['bPawn',5,1],['bPawn',6,1],['bPawn',7,1]
	],

	render(){
		//draws all pieces on the canvas
		for(i of this.pieces){
			if(i[0] == 'wPawn'){
				ctx.drawImage(pieces.img,0,0,100,215,i[1]*50+9,i[2]*50-5,35,50)
			}else if(i[0] == 'wRook'){
				ctx.drawImage(pieces.img,100,0,100,215,i[1]*50+7.5,i[2]*50-5,35,50)
			}else if(i[0] == 'wBishop'){
				ctx.drawImage(pieces.img,200,0,90,215,i[1]*50+7.5,i[2]*50-5,35,50)
			}else if(i[0] == 'wKnight'){
				ctx.drawImage(pieces.img,295,0,100,215,i[1]*50+7.5,i[2]*50-5,35,50)
			}else if(i[0] == 'wQueen'){
				ctx.drawImage(pieces.img,400,0,100,215,i[1]*50+7.5,i[2]*50,35,50)
			}else if(i[0] == 'wKing'){
				ctx.drawImage(pieces.img,500,0,100,215,i[1]*50+7.5,i[2]*50,35,50)
			}else if(i[0] == 'bPawn'){
				ctx.drawImage(pieces.img,0,215,100,215,i[1]*50+9,i[2]*50-5,35,50)
			}else if(i[0] == 'bRook'){
				ctx.drawImage(pieces.img,100,215,100,215,i[1]*50+7.5,i[2]*50-5,35,50)
			}else if(i[0] == 'bBishop'){
				ctx.drawImage(pieces.img,200,215,90,215,i[1]*50+7.5,i[2]*50-5,35,50)
			}else if(i[0] == 'bKnight'){
				ctx.drawImage(pieces.img,295,215,100,215,i[1]*50+7.5,i[2]*50-5,35,50)
			}else if(i[0] == 'bQueen'){
				ctx.drawImage(pieces.img,400,215,100,215,i[1]*50+7.5,i[2]*50,35,50)
			}else if(i[0] == 'bKing'){
				ctx.drawImage(pieces.img,500,215,100,215,i[1]*50+7.5,i[2]*50,35,50)
			}
		}
	},
	
}

function background(){
	ctx.clearRect(0,0,cw,ch)
	for(let i=0;i<cw;i+=(cw/8)){
		for(let i0=0;i0<ch;i0+=(ch/8)){
			if(((i/50)+(i0/50))%2 == 0){
				ctx.fillStyle = 'brown'
				ctx.fillRect(i,i0,(cw/8),(cw/8))
			}else{
				ctx.fillStyle = 'beige'
				ctx.fillRect(i,i0,(cw/8),(cw/8))
			}
		}
	}
	
}

function renderSelection(){
	if(pieces.selectedPiece !=  null){
		ctx.fillStyle = 'rgba(92, 139, 214,0.5)'
		ctx.fillRect(selPiece()[1]*50,selPiece()[2]*50,50,50)
	}
}

function renderBoard(){
	background()
	pieces.render()
	renderSelection()
	
}

function isValid(x,y){
	for(i in pieces.pieces ){
		if( ((game.turn == 'w' && isBlack(pieces.pieces[i][0]) || (game.turn == 'b' && iswhite(pieces.pieces[i][0])))) && i != pieces.selectedPiece && pieces.pieces[i][1] == x && pieces.pieces[i][2] == y){
			takePiece(i,1)
		}else if(false){
			
		}else{

		}
	}
}

function pieceAt(x,y,d){
	//returns index if d = true
	for( i in pieces.pieces){
		if(pieces.pieces[i][1] == x && pieces.pieces[i][2] == y){
			if(!d){
			return pieces.pieces[i]
			}else{
				return i
			}
		}
	}
	return false;
}

function takePiece(x,y){
	pieces.pieces.splice(pieceAt(x,y,true),1)
	renderBoard()
}

function isBlack(name){
 return( pieces.blackPieces.includes(name))
}

function isWhite(name){
	return( pieces.whitePieces.includes(name))
}

function selPiece(){
	return pieces.pieces[pieces.selectedPiece]
}


window.onload = function(){
	renderBoard()

}

c.onmousemove = function(e){
	mouse.x = Math.floor(e.offsetX/50);
	mouse.y = Math.floor(e.offsetY/50);


}

c.onclick = function(){


	if(pieces.selectedPiece == null){
		//selects a piece if there is none selected

		pieces.pieces.forEach(function(v,i){
			if(v[1] ==mouse.x && v[2] == mouse.y){
				//finds which piece is being refrenced
				
				if(game.turn == 'w' && (pieces.whitePieces.includes(v[0]))){
				pieces.selectedPiece = i;
				renderBoard()
				console.log('you clicked a '+v[0]+' at: '+v[1]+' ,'+v[2])
				}else if(game.turn == 'b' && (pieces.blackPieces.includes(v[0]))){
				pieces.selectedPiece = i;
				renderSelection()
				console.log('you clicked a '+v[0]+' at: '+v[1]+' ,'+v[2])
				}else{
					alert("cannot move opponent's pieces")
				}
			}
		});
	}else{
		//attempts to move the selected piece
	
		if(selPiece()[0] == 'wPawn'){
			//single jump
			if(mouse.x == selPiece()[1]&& mouse.y == selPiece()[2]-1 ){

				if(!pieceAt(mouse.x,mouse.y) ){
				selPiece()[1] = mouse.x;
				selPiece()[2] = mouse.y;

				}else{
					alert('spot occupied')

				}
			

			}else if(mouse.y == selPiece()[2]-2 && selPiece()[2] ==6){

				//double jump

				if(!pieceAt(mouse.x,mouse.y) &&  !pieceAt(mouse.x,mouse.y+1)){

				selPiece()[1] = mouse.x;
				selPiece()[2] = mouse.y;

				}else{
					alert('spot occupied')

				}


			}else if(mouse.y == selPiece()[2]-1 && (mouse.x == selPiece()[1]-1 || mouse.x == selPiece()[1]+1 ) && isBlack(pieceAt(mouse.x,mouse.y)[0]) ){
				//take diagonally
				
				takePiece(mouse.x,mouse.y)
				selPiece()[1] = mouse.x;
				selPiece()[2] = mouse.y;

			}else{

				alert('illegal move')

			}

			


		}else if(selPiece()[0] == 'wRook'){
			if(mouse.x == selPiece()[1]&& mouse.y != selPiece()[2]){

				//vertical rook move
				

				if(mouse.y>selPiece()[2]){
					//downward move
					console.log('downward move')

				}else{
					// upward move
					console.log('upward move')

					for(i0=selPiece()[2]-1;i0>=mouse.y;i0-=1){

						console.log(pieceAt(selPiece()[1],i0))

						if( i0 == mouse.y){
							//if on the final square
							console.log('on final square')

							if(isBlack( pieceAt(selPiece()[1],i0)[0] )){
								console.log('landed on black piece')
								selPiece()[1]= mouse.x
								selPiece()[2]= mouse.y
								takePiece(selPiece()[1],i0)
							}else if(isWhite( pieceAt(selPiece()[1],i0)[0] )){
								console.log('you cant take your pieces stupid')
							}else{
								console.log('moved')
								selPiece()[1] = mouse.x
								selPiece()[2] = mouse.y
							}
						}else{
							//if not on final square
							if(isBlack( pieceAt(selPiece()[1],i0)[0] )){
								alert('black piece interfering')
								break
							}else if(isWhite( pieceAt(selPiece()[1],i0)[0] )){
								alert('white piece interfering')
								break
							}
						}
						
					}
				}

			}else if(mouse.x != selPiece()[1]&& mouse.y == selPiece()[2]){

				console.log('horisontal rook move')


			}else{
				alert('invalid move')
			}
		}else if(selPiece()[0] == 'wBishop'){
			
		}else if(selPiece()[0] == 'wKnight'){
			
		}else if(selPiece()[0] == 'wQueen'){
			
		}else if(selPiece()[0] == 'wKing'){
			if(mouse.x >= selPiece()[1]-1 && mouse.x <= selPiece()[1]+1 && mouse.y >= selPiece()[2]-1 && mouse.y <= selPiece()[2]+1){
				//if move is one unit
				if(pieces.blackPieces.includes(pieceAt(mouse.x,mouse.y)[0])  ){
					//if piece is black
					takePiece(mouse.x,mouse.y)
					selPiece()[1] = mouse.x
					selPiece()[2] = mouse.y

				}else if(pieces.whitePieces.includes(pieceAt(mouse.x,mouse.y)[0])){
					//if piece is white
					alert(" you can't take your own pieces stupid")
				}else{
					selPiece()[1] = mouse.x
					selPiece()[2] = mouse.y
				}
			}

			
		}else if(selPiece()[0] == 'bPawn'){
			
		}else if(selPiece()[0] == 'bRook'){
			
		}else if(selPiece()[0] == 'bBishop'){
			
		}else if(selPiece()[0] == 'bKnight'){
			
		}else if(selPiece()[0] == 'bQueen'){
			
		}else if(selPiece()[0] == 'bKing'){
			
		}
		pieces.selectedPiece = null;
		renderBoard()
	}
}