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
var myHand = new Hand(); 
var yourHand = new Hand();
console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());
if(yourHand.score() > myHand.score()) console.log("you win!"); 
else if(yourHand.score() < myHand.score()) console.log("I win!"); 
else console.log("We tied!");


