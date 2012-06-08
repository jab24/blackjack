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
}
var hand1 = new Hand(); 
console.log(hand1.card1.getValue());
console.log(hand1.card2.getValue())

