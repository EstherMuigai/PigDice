
  
//USER INTERFACE LOGIC
$("document").ready (function(){
    $("div#welcome").fadeIn("slow",function(){
         $("div#welcome").show();
     });
     $("div#welcome").click(function(){
        $("div#rolldice").show();
        $("button#hold").show();
        $("button#newgame").show();
         $("div#welcome").fadeOut("slow",function(){
             $("div#welcome").hide(); 
         });
     }); 
    $("div#rolldice").click(function(){
        event.preventDefault();
        $("div#rolldice").hide().show(500);
        $("div#dice").show().delay(200).hide(500);
        Player = player2;
        alternatePlayer(Player);
    });
});

//BUSINESS LOGIC
function Player (name,points,score,point) {
    this.Name = name;
    this.Points = points;
    this.Score = score;
    this.point = point;
  }

var player1 = new Player("Player1");
var player2 = new Player("Player2");
player1.points = [];
player2.points = [];



Player.prototype.startRolling =function () {
    return Math.floor(Math.random() * (6) + 1);
}

Player.prototype.displayPoints = function (number) {
    if (Player == player1) {
        $("ul#pointsA").empty();
        $("ul#pointsA").append("<li><span class='pointsA'>" +number+ "</span></li>");
    }
    else if (Player == player2) {
        $("ul#pointsB").empty();
        $("ul#pointsB").append("<li><span class='pointsA'>" +number+ "</span></li>");
    }
}

function alternatePlayer(currplayer) {
    if (currplayer == player1) {
        player1.point = parseInt(player1.startRolling());
        player1.displayPoints(player1.point);
        enforceRule(player1.point,"ul#pointsA",player1.points,"ul#scoreA");
        player1.points.push(player1.point);
        player1.score = player1.points.reduce((x,y)=>(x+y));
        player1.displayScore(player1.score);
    } else if (currplayer == player2){
        player2.point = parseInt(player2.startRolling());
        player2.displayPoints(player2.point);
        enforceRule(player2.point,"ul#pointsB",player2.points,"ul#scoreB");
        player2.points.push(player2.point);
        player2.score = player2.points.reduce((x,y)=>(x+y));
        player2.displayScore(player2.score);
    }
}

Player.prototype.displayScore = function (number2) {
    if (Player == player1) {
    $("ul#scoreA").empty();
    $("ul#scoreA").append("<li><span class='scoreA'>" +number2+ "</span></li>");
    }
    else if (Player == player2) {
    $("ul#scoreB").empty();
    $("ul#scoreB").append("<li><span class='scoreB'>" +number2+ "</span></li>");
    }
}

function enforceRule (pointss,element1,element2,element3) {
    if (pointss === 1) {
        $(element1).empty();
        while (element2.length > 0) {
            element2.pop();
        }
        $("div#roll1").show().delay(1500).hide(500);
        $(element3).empty();
        $(element3).reset()[0];
        $(element).empty();
        $(element1).reset()[0];
    }
}