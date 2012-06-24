function Card(s,n){
	var suit = s;
	var number = n;
	this.getSuit = function(){
		return suit;
	}
	this.getNumber = function(){
		return number;
	}
	this.getValue = function(){
        	if (number >= 11 && number <= 13) {
            		return 10;
        	}
        	else if (number === 1) {
           		 return 11;
        	}
        	else {
        	    return number;
        	}
    	};
	this.hitMe = function(){
        	var newCard = deal();
        	myArray.push(newCard);
    	};
}
var deal = function(){
	suit = Math.floor(Math.random()*4+1);  
        number = Math.floor(Math.random()*13+1);
        return new Card(suit,number);
}
function Hand(){
   	var card1 = deal(); 
    	var card2 = deal(); 
	var myArray = [card1,card2];
	this.score = function(){
 		var score = 0;
 		var ace = 0;
 		for (var i=0; i< hand.length;i++){
     			if (hand[i].getValue === 11){
         		score += hand[i].getValue(); 
         		ace++;
     			}
     			else{
         			score += hand[i].getValue();
     			}
 		}
 		while (score > 21 && ace >0){
     			score -=10;
     			ace--;
 		}
   	return score;
}; 
	this.printHand = function(){
        	var string = "";
        	for(var i = 0; i < myArray.length; i++){
            		string = myArray[i].getNumber() + " of suit "+ myArray[i].getSuit()+", ";
        	}
        return string;
    	};
   	console.log(myArray.printHand());
}
function playAsDealer(){
    var dealerHand = new Hand();
    while (dealerHand.score() < 17){
        dealerHand.hitme();
    }
    return dealerHand;
}
function playAsUser(){
    player = new Hand();
    hit = confirm(player.printHand(false)+" for "+player.score()+" points, do you want to hit?");
    if (hit) {
        player.hitMe(false);
    } while (hit === true) {
        hit = confirm(player.printHit(false)+" for "+player.score()+" points, do you want to hit again?");
        if (hit) {
            player.hitMe(false);
        }
    }
    return player.getHand;
}
var declareWinner = function(userHand, dealerHand){
var userscore = userHand.score();
var dealerscore = dealerHand.score();
if (userscore > 21){
if (dealerscore > 21){
console.log("You tied!");
return "You tied!";
}
else {
console.log("You lose!");
return "You lose!"; 
}
}
else if (dealerscore > 21){
console.log("You win!");
return "You win!";
}
else if (userscore > dealerscore){
console.log("You win!");
return "You win!";
}
else if (userscore === dealerscore){
console.log("You tied!");
return "You tied!"; 
}
else {
console.log("You lose!");
return "You lose!"; 

}
}
var playGame = function() {
    var userHand = playAsUser();
    var dealerHand = playAsDealer();
    var result = declareWinner(userHand, dealerHand);
    console.log("User's hand: " + userHand.printHand());
    console.log("\tfor a score of " + userHand.score());
    console.log("Dealer's hand: " + dealerHand.printHand());
    console.log("\tfor a score of " + dealerHand.score());
    console.log("\n" + result + "\n");
};
playGame();
