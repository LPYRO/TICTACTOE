function get(id){
    return document.getElementById(id);
}
var player;
var killGame;
var thereIsAwinner;
var scoreO=0;
var scoreX=0;

function startGame(){
    
    var whosFirst=Math.round(Math.random());
    if(whosFirst==1)
    player="X" ;
    else
    player="O" ;
    get('playerWho').innerHTML ="Player : " +player;
    empty();
    killGame = 0;
    thereIsAwinner = 0;
    get('score').innerHTML ="[Score X = "+scoreX+"]  [Score O = "+scoreO+"]";
    
}
function empty(){
    for(var i=1;i<10;i++){
        var IDs = "t"+i;
        get(IDs).innerHTML='';
        get(IDs).style='background-color:#45ff8f;'
    }
}

function fill(id) {
    if(thereIsAwinner==0){
    if(player=="X" && get(id).innerHTML==""){
    get(id).innerHTML='X';
    player="O";
    killGame++;
    get('playerWho').innerHTML ="Player : "+player;
    }
    else if (player=="O" && get(id).innerHTML==""){
    get(id).innerHTML='O';
    player="X";
    killGame++;
    get('playerWho').innerHTML ="Player : "+player;
    }
    checkWinner();
    }
}
function checkWinner(){
    var t1=get('t1').innerHTML;
    var t2=get('t2').innerHTML;
    var t3=get('t3').innerHTML;
    var t4=get('t4').innerHTML;
    var t5=get('t5').innerHTML;
    var t6=get('t6').innerHTML;
    var t7=get('t7').innerHTML;
    var t8=get('t8').innerHTML;
    var t9=get('t9').innerHTML;
    if(t1==t2 && t2==t3 && t1!="" && t2!="" && t3!=""){
        get('playerWho').innerHTML = "Player " +t1+ " win";
        get('t1').style='background-color:#ff1259;';
        get('t2').style='background-color:#ff1259;';
        get('t3').style='background-color:#ff1259;';
        gameOver(t1);
    }
    else if(t4==t5 && t5==t6 && t4!="" && t5!="" && t6!=""){
        get('playerWho').innerHTML = "Player " +t4+ " win";
        get('t4').style='background-color:#ff1259;';
        get('t5').style='background-color:#ff1259;';
        get('t6').style='background-color:#ff1259;';
        gameOver(t4);
    }
    else if(t7==t8 && t8==t9 && t7!="" && t8!="" && t9!=""){
        get('playerWho').innerHTML = "Player " +t7+ " win";
        get('t7').style='background-color:#ff1259;';
        get('t8').style='background-color:#ff1259;';
        get('t9').style='background-color:#ff1259;';
        gameOver(t9);
    }
    else if(t3==t6 && t6==t9 && t3!="" && t6!="" && t9!=""){
        get('playerWho').innerHTML = "Player " +t3+ " win";
        get('t3').style='background-color:#ff1259;';
        get('t6').style='background-color:#ff1259;';
        get('t9').style='background-color:#ff1259;';
        gameOver(t9);
    }
    else if(t2==t5 && t5==t8 && t2!="" && t5!="" && t8!=""){
        get('playerWho').innerHTML = "Player " +t2+ " win";
        get('t2').style='background-color:#ff1259;';
        get('t5').style='background-color:#ff1259;';
        get('t8').style='background-color:#ff1259;';
        gameOver(t8);
    }
    else if(t1==t4 && t4==t7 && t1!="" && t4!="" && t7!=""){
        get('playerWho').innerHTML = "Player " +t1+ " win";
        get('t1').style='background-color:#ff1259;';
        get('t4').style='background-color:#ff1259;';
        get('t7').style='background-color:#ff1259;';
        gameOver(t7);
        
    }
    else if(t1==t5 && t5==t9 && t1!="" && t5!="" && t9!=""){
        get('playerWho').innerHTML = "Player " +t1+ " win";
        get('t1').style='background-color:#ff1259;';
        get('t5').style='background-color:#ff1259;';
        get('t9').style='background-color:#ff1259;';
        gameOver(t9);
    }
    else if(t3==t5 && t5==t7 && t3!="" && t5!="" && t7!=""){
        get('playerWho').innerHTML = "Player " +t3+ " win";
        get('t3').style='background-color:#ff1259;';
        get('t5').style='background-color:#ff1259;';
        get('t7').style='background-color:#ff1259;';
        gameOver(t7);
    }
    else if(killGame==9){
        get('playerWho').innerHTML = "  DRAW ! ";
    }
    
    
}
function gameOver(winner){

    if(winner=="X"){
        scoreX++;
        get('score').innerHTML ="[Score X = "+scoreX+"]  [Score O = "+scoreO+"]";
    }
    else if (winner=="O"){
        scoreO++;
        get('score').innerHTML ="[Score X = "+scoreX+"]  [Score O = "+scoreO+"]";
    }
    thereIsAwinner = 1;
    
    

}