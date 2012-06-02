var deal = function () {
    var card = Math.floor(Math.random()*52+1);
    return card;
};
var card1 = deal();
var card2 = deal();
var getValue = function(card) {
    // if its a face card, number should be set to 10
    if((card % 13 > 10 || card === 0)) {
        return 10;
    }
    // What if it's an Ace?
    else if (card % 13 === 1) return 11;
    // Otherwise number should be set to card modulo 13
    else {
        return card % 13;
    }
};
var score = function () {
    return getValue(card1+card2);
};
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());
