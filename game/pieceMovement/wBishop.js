function moveWhiteBishop(){
    if((selPiece()[1]-mouse.x)==(selPiece()[2]-mouse.y)){
        //positive line
        if(mouse.x > selPiece()[1]){
            console.log('bottomRight')

        }else if(mouse.x < selPiece()[1]){
            console.log('topLeft')

        }
    }else if(-(selPiece()[1]-mouse.x)==(selPiece()[2]-mouse.y)){
        //negative line
        if(mouse.x > selPiece()[1]){
            console.log('topRight')

            for(i0=selPiece()[2]+1;i0<=mouse.y;i0++){
                console.log(i0)
                if( i0 == mouse.y){
                    //if on the final square
                    if(isBlack( pieceAt(selPiece()[1]+(i0-(selPiece()[2]+1)),i0)[0] )){
                        takePiece(selPiece()[1],i0)
                        selPiece()[1]= mouse.x
                        selPiece()[2]= mouse.y
                    }else if(isWhite( pieceAt(selPiece()[1]+(i0-(selPiece()[2]+1)),i0)[0] )){
                        alert('you cant take your pieces stupid')
                    }else{
                        selPiece()[1] = mouse.x
                        selPiece()[2] = mouse.y
                    }
                }else{
                    //if not on final square
                    if(isBlack( pieceAt(selPiece()[1]+(i0-(selPiece()[2]+1)),i0)[0] )){
                        alert('black piece interfering')
                        break
                    }else if(isWhite( pieceAt(selPiece()[1]+(i0-(selPiece()[2]+1)),i0)[0] )){
                        alert('white piece interfering')
                        break
                    }
                }
            }

        }else if(mouse.x < selPiece()[1]){
            console.log('bottomLeft')

        }
    }
    else{
        console.log('invalid move')
    }
}