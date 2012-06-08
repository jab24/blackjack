function Card(s,n){
	var suit = s;
	var number = n;
	this.getSuit = function(){
		return getSuit;
	}
	this.getNumber = function(){
		return getNumber;
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
}
var deal = function(){
	suit = Math.floor(Math.random()*4+1);  
        number = Math.floor(Math.random()*13+1);
        return new Card(suit,number);
}
function Hand(){
   	this.card1 = deal(); 
    	this.card2 = deal(); 
	this.score = function(){
      		return card1.getValue()+card2.getValue();  
    	};
}
var myHand = new Hand(); 
var yourHand = new Hand();
console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());
if(yourHand.score() > myHand.score()) console.log("you win!"); 
else if(yourHand.score() < myHand.score()) console.log("I win!"); 
else console.log("We tied!");


