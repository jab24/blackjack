var deal = function () {
    var card = Math.floor(Math.random()*52+1);
    return card;
};
var card1 = deal();
var card2 = deal();
var score = function () {
    return card1+card2;
};
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());
