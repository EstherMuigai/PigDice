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
        $("div#rolldice").hide();
        $("div#dice").show();
        rolling();
    });
});

//BUSINESS LOGIC
function rolling(number) {
    number = Math.floor(Math.random() * 6);
    $("ul#pointsA").append("<li><span class='point'>" +number+ "</span></li>");
}