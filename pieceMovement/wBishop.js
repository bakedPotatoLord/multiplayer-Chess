function moveWhiteBishop(){
    if((selPiece()[1]-mouse.x)==(selPiece()[2]-mouse.y)){
        //positive line
        if(mouse.x > selPiece()[1]){

        }else if(mouse.x < selPiece()[1]){
            
        }
    }else if(-(selPiece()[1]-mouse.x)==(selPiece()[2]-mouse.y)){
        //negative line
    }
    else{
        console.log('error')
    }
}