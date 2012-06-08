function Card(s,n){
	var suit = s;
	var number = n;
	this.getSuit = function(){
		return getSuit;
	}
	this.getNumber = function(){
		return getNumber;
	}
}
var deal = function(){
	suit = Math.floor(Math.random()*4+1);  
        number = Math.floor(Math.random()*13+1);
        return new Card(suit,number);
}
var card1 = deal();
var card2 = deal();
