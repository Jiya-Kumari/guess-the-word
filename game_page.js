player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1+" : ";
document.getElementById("player2_name").innerHTML=player2+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn - "+player1;
document.getElementById("player_answer").innerHTML="answer turn - "+player2;
function send(){
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    char1=word.charAt(1);
    lengthHalf=Math.floor(word.length/2);
    char2=word.charAt(lengthHalf);
    char3=word.charAt(word.length-1);
    remove1=word.replace(char1,"_");
    remove2=remove1.replace(char2,"_");
    remove3=remove2.replace(char3,"_");
    questionWord="<h4 id='word_display'>"+remove3+"</h4>";
    inputBox="<br>answer: <input type='text' id='input_check_box'>";
    checkButton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    document.getElementById("output").innerHTML=questionWord+inputBox+checkButton;
    document.getElementById("word").value="";
}
questionTurn="player1";
answerTurn="player2";
function check(){
    getAnswer=document.getElementById("input_check_box").value;
    answer=getAnswer.toLowerCase();
    if(answer==word){
        if(answerTurn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score; 
        }
    }
    if(answerTurn=="player1"){
        answerTurn="player2";
        document.getElementById("player_answer").innerHTML="answer Turn - "+player2;
    }
    else{
        answerTurn="player1";
        document.getElementById("player_answer").innerHTML="answer Turn - "+player1;
    }
    if(questionTurn=="player1"){
        questionTurn="player2";
        document.getElementById("player_question").innerHTML="question Turn - "+player2;
    }
    else{
        questionTurn="player1";
        document.getElementById("player_question").innerHTML="question Turn - "+player1;
    }
    document.getElementById("output").innerHTML="";
}