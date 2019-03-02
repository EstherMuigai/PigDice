//USER INTERFACE LOGIC
$("document").ready (function(){
   /** $("div#welcome").fadeIn("slow",function(){
        $("div#welcome").show();
    }); 
    $("div#welcome").click(function(){
        $("div#welcome").fadeOut("slow",function(){
            $("div#welcome").hide(); 
        });
    }); */
    
    $("div#rolldice").click(function(){
        event.preventDefault();
        $("div#rolldice").hide().show(500);
        $("div#dice").show().delay(200).hide(500);
        Player = player2;
        alternatePlayer(Player);
    });
});

//BUSINESS LOGIC
function Player (name,points,score) {
    this.Name = name;
    this.Points = points;
    this.Score = score;
  }

var player1 = new Player("Player1");
var player2 = new Player("Player2");

Player.prototype.startRolling =function () {
    return Math.floor(Math.random() * (6) + 1);
}

Player.prototype.displayPoints = function (number) {
    if (Player == player1) {
        $("ul#pointsA").append("<li><span class='pointsA'>" +number+ "</span></li>");
    }
    else if (Player == player2) {
        $("ul#pointsB").append("<li><span class='pointsA'>" +number+ "</span></li>");
    }
}

Player.prototype.scorePlayer = function (total,number1){
    return total += number1;
}

Player.prototype.displayScore = function (number2) {
    $("ul#scoreA").append("<li><span class='scoreA'>" +number2+ "</span></li>");
    $("ul#scoreB").append("<li><span class='scoreB'>" +number2+ "</span></li>");
}

function alternatePlayer(currplayer) {
    if (currplayer == player1) {
        player1.points = player1.startRolling();
        player1.displayPoints(player1.points);
        return $(currplayer = player2);
    } else if (currplayer == player2){
        player2.points = player2.startRolling();
        player2.displayPoints(player2.points);
        return $(currplayer = player1);
    }
}
