 //USER INTERFACE LOGIC
$("document").ready (function(){
    $("div#welcome").fadeIn("slow",function(){
        $("div#welcome").show();
    });
    $("div#welcome").click(function(){
        event.preventDefault();
        $("button#newgame").show();
        $("div#welcome").fadeOut("slow",function(){
            $("div#welcome").hide(); 
        });
    });
    $("button#newgame").click(function (){
        event.preventDefault();
        $("button#p1").show();
        $("button#p2").show();
        $("button#hold").show();
        startGame();
    });
    $("button#p1").click(function play(){
        event.preventDefault();
        $("ul#scoreA").hide();
        $("ul#scoreB").show();
        $("button#p2").hide();
        display1 = parseInt(player1.startRound(player1.point));
        player1.displayScore(player1,display1);
    });
    $("button#p2").click(function(){
        event.preventDefault();
        $("ul#scoreA").show();
        $("ul#scoreB").hide();
        $("button#p1").hide();
        display2 = parseInt(player2.startRound(player2.point));
        player2.displayScore(player2,display2);
    });
    $("button#hold").click(function(){
        event.preventDefault();
        $("ul#scoreA").show();
        $("ul#scoreB").show();
        $("button#p1").show();
        $("button#p2").show();
        $("ul#pointsA").empty();
        $("ul#pointsA").empty();
    });
});

//BUSINESS LOGIC
function Player (name,points,score,point,heldscore,heldscores) {
    this.Name = name;
    this.Points = points;
    this.Score = score;
    this.Point = point;
    this.HeldScore = heldscore;
    this.HeldScores = heldscores;
  }

var player1 = new Player("Player1");
var player2 = new Player("Player2");
var display1;
var display2;

function startGame() {
    player1.points = [];
    player2.points = [];
    player1.heldscores = [];
    player2.heldscores = []; 
    display1 = 0;
    display2 = 0;
    $("ul").empty();   
}

Player.prototype.startRolling =function () {
    return Math.floor(Math.random() * (6) + 1);
}

Player.prototype.displayPoints = function (player,number) {
    if (player == player1) {
        $("ul#pointsA").empty();
        $("ul#pointsA").append("<li><span class='pointsA'>" +number+ "</span></li>");
    }else if (player == player2) {
        $("ul#pointsB").empty();
        $("ul#pointsB").append("<li><span class='pointsA'>" +number+ "</span></li>");
    }
}

Player.prototype.letsPlay = function (number3) {
    if (number3 == player1.point) {
        player1.points.push(player1.point);
        player1.score = player1.points.reduce((x,y)=>(x+y));
        player1.heldscores.push(player1.score);
        player1.heldscore = player1.heldscores.reduce((x,y)=>(x+y));
        enforceRule(player1.point,"ul#pointsA",player1.points,player1.score,player1.heldscores);
        player1.displayPoints(player1,player1.score);
        return player1.heldscore;
    }
    else if (number3 == player2.point) {
        player2.points.push(player2.point);
        player2.score = player2.points.reduce((x,y)=>(x+y));
        player2.heldscores.push(player2.score);
        player2.heldscore = player2.heldscores.reduce((x,y)=>(x+y));
        enforceRule(player2.point,"ul#pointsB",player2.points,player2.score,player2.heldscores);
        player2.displayPoints(player2,player2.score);
        return player2.heldscore;
    }
}

Player.prototype.displayScore = function (player,number2) {
    if (player == player1 && number2 < 100) {
        $("ul#scoreA").empty();
        $("ul#scoreA").append("<li><span class='scoreB'>" +number2+ "</span></li>");
    } else if (player == player2 && number2 < 100) {
        $("ul#scoreB").empty();
        $("ul#scoreB").append("<li><span class='scoreA'>" +number2+ "</span></li>");
    }else if (player == player1 && number2 >= 100){
        $("ul#scoreA").empty();
        $("ul#scoreB").empty();
        $("ul#pointsA").empty();
        $("ul#pointsB").empty();
        $("ul#pointsA").append("<li><span class='pointsA'>WINNER!</span></li>");
        $("button#p1").hide();
        $("button#p2").hide();
        $("button#hold").hide();
    }else if (player == player2 && number2 >= 100) {
        $("ul#scoreA").empty();
        $("ul#scoreB").empty();
        $("ul#pointsA").empty();
        $("ul#pointsB").empty();
        $("ul#pointsB").append("<li><span class='pointsB'>WINNER!</span></li>");
        $("button#p1").hide();
        $("button#p2").hide();
        $("button#hold").hide();
    } 
}

function enforceRule (pointss,element1,element2,element5,element6) {
    if (pointss === 1) {
        $("div#roll1").show().delay().hide(1000);
        element6.push(element5);
        $(element1).empty();
        while (element2.length > 0) {
           element2.pop();
        }
        $(element1).empty();
        $(element1).reset()[0];
        pointss = 0;
        element6 = element6.reduce((x,y)=>(x+y-1));
        return element6;
    }
}

Player.prototype.startRound = function (pp) {
 if (pp == player1.point) {
    player1.point = player1.startRolling();
    player1.heldscore = player1.letsPlay(player1.point);
    return player1.heldscore;
 } else if (pp == player2.point){
    player2.point = player2.startRolling();
    player2.heldscore = player2.letsPlay(player2.point);
    return player2.heldscore;
 }
}


