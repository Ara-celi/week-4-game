$(document).ready(function () {

	console.log("starwars game loaded");

	var gameCharacters=['obiWonKenobi', 'lukeSkywalker', 'darthSidious', 'darthMaul'];
	var kenobi=0;
	var skywalker=0;
	var sidious=0
	var maul=0;
	var playerChosen=false;
	var enemyChosen=false;
	
	//click on one of four characters 
	$(".character").click(function() {
			console.log( "hello")

		if (playerChosen==false) {
			//move selected player into character row
			$("#yourCharacter").append($(this));
			playerChosen=true;
			console.log("it works")
			console.log(playerChosen)
		}
			//move remaining players into enemies row
			$("#enemies").append($(".player"))
				console.log("enemies")
			//images need to change style black border red padding
			$(".player").children().css('background-color', "red");
			$(".player").children().css('border-color', "black");
		
		});	
})

//click on one of three enemies


//enemy clicked on goes under 'defender'
//image needs to style black padding green border





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

