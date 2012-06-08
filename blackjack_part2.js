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
var card1 = deal();
var card2 = deal();
