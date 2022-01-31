function checkLocation(x,y){
    if(isBlack(pieceAt(x,y)[0])){
        takePiece(x,y)
        selPiece()[1] = x
        selPiece()[2] = y
    }else if(isWhite(pieceAt(x,y)[0])){
        alert('you cant take your own pieces, stupid')
    }else{
        selPiece()[1] = x
        selPiece()[2] = y
    }
}
function moveWhiteKnight(){
    if(selPiece()[1]-1==mouse.x && selPiece()[2]-2==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]+1==mouse.x && selPiece()[2]-2==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]-1==mouse.x && selPiece()[2]+2==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]+1==mouse.x && selPiece()[2]+2==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]-2==mouse.x && selPiece()[2]-1==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]-2==mouse.x && selPiece()[2]+1==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]+2==mouse.x && selPiece()[2]-1==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else if(selPiece()[1]+2==mouse.x && selPiece()[2]+1==mouse.y){
        checkLocation(mouse.x,mouse.y)
    }else{
        alert('invalid move')
    }
}