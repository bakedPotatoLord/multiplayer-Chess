function moveRook(){
    if(mouse.x == selPiece()[1]&& mouse.y != selPiece()[2]){
        if(mouse.y>selPiece()[2]){
            //downward move
            for(i0=selPiece()[2]+1;i0<=mouse.y;i0++){
                if( i0 == mouse.y){
                    //if on the final square
                    if(isBlack( pieceAt(selPiece()[1],i0)[0] )){
                        takePiece(selPiece()[1],i0)
                        selPiece()[1]= mouse.x
                        selPiece()[2]= mouse.y
                    }else if(isWhite( pieceAt(selPiece()[1],i0)[0] )){
                        alert('you cant take your pieces stupid')
                    }else{
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

        }else{
            // upward move
            for(i0=selPiece()[2]-1;i0>=mouse.y;i0-=1){
                if( i0 == mouse.y){
                    //if on the final square
                    if(isBlack( pieceAt(selPiece()[1],i0)[0] )){
                        takePiece(selPiece()[1],i0)
                        selPiece()[1]= mouse.x
                        selPiece()[2]= mouse.y
                    }else if(isWhite( pieceAt(selPiece()[1],i0)[0] )){
                        alert('you cant take your pieces stupid')
                    }else{
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
        //horisonal rook move
        if(mouse.x>selPiece()[1]){
            //rightward move
            for(i0=selPiece()[1]+1;i0<=mouse.x;i0++){
                if( i0 == mouse.x){
                    //if on the final square
                    if(isBlack( pieceAt(i0,selPiece()[2])[0] )){
                        takePiece(i0,selPiece()[2])
                        selPiece()[1]= mouse.x
                        selPiece()[2]= mouse.y
                    }else if(isWhite( pieceAt(i0,selPiece()[2])[0] )){
                        alert('you cant take your pieces stupid')
                    }else{
                        selPiece()[1] = mouse.x
                        selPiece()[2] = mouse.y
                    }
                }else{
                    //if not on final square
                    if(isBlack( pieceAt(i0,selPiece()[2])[0] )){
                        alert('black piece interfering')
                        break;
                    }else if(isWhite( pieceAt(i0,selPiece()[2])[0] )){
                        alert('white piece interfering')
                        break;
                    }
                }
            }
        }else{
            //leftward move
            for(i0=selPiece()[1]-1;i0>=mouse.x;i0-=1){
                if( i0 == mouse.x){
                    //if on the final square
                    if(isBlack( pieceAt(i0,selPiece()[2])[0] )){
                        takePiece(i0,selPiece()[2])
                        selPiece()[1]= mouse.x
                        selPiece()[2]= mouse.y
                    }else if(isWhite( pieceAt(i0,selPiece()[2])[0] )){
                        alert('you cant take your pieces stupid')
                    }else{
                        selPiece()[1] = mouse.x
                        selPiece()[2] = mouse.y
                    }
                }else{
                    //if not on final square
                    if(isBlack( pieceAt(i0,selPiece()[2])[0] )){
                        alert('black piece interfering')
                        break;
                    }else if(isWhite( pieceAt(i0,selPiece()[2])[0] )){
                        alert('white piece interfering')
                        break;
                    }
                }
            }
        }
    }else{
        alert('invalid move')
    }
}