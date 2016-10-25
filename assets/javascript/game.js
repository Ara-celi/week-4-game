$(document).ready(function(){

console.log("starwars game loaded");

var kenobi="";
var skywalker="";
var sidious="";
var maul="";


$("img").click(function() {
	console.log( "hello")
$(this).appendTo($("#yourCharacter"));
	console.log("it works")
$(".player").appendTo($("#enemies"))
	console.log("enemies")
});



//click on one of four characters







//character clicked on moves under 'your character'
//


//click on one of three enemies


//enemy clidked on goes under 'defender'





//when attack is pressed, under defender
 //alert: You attacked____ for # damage.
 //______attached you back for # damage.


//when game if over, under defender image:
//alert: You've been defeated...GAME OVER!!!
//alert: You Won!!!! GAME OVER!!!
 //restart button appears under alert 
//and disappears once clicked

//ALL CLICKS DISABLED WHEN GAME OVER

//if defender defeated
//alert: You have defeated Luke Skywalker, you can
//choose to fight another enemy. 
//if attack is pressed alert: No enemy here.
//once enemy is chosen clear alerts

});	