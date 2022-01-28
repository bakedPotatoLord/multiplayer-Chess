function moveWhiteKing(){
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
}