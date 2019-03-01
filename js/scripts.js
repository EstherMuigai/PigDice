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
        $("div#rolldice").hide().show(1000);
        $("div#dice").show().delay(500).hide(500);
        var points = rolling ();
        displayPoints(points);

    });
});

//BUSINESS LOGIC
function rolling(number) {
    return Math.floor(Math.random() * 6);
}

function displayPoints(number2) {
    $("ul#pointsA").append("<li><span class='pointsA'>" +number2+ "</span></li>");
}