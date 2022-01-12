console.log('Lodash is loaded:', typeof _ !== 'undefined');
var club = [];
var clubsDeck = createDeck('clubs', club);
var spades = [];
var spadesDeck = createDeck('spades', spades);
var the26One = clubsDeck.concat(spadesDeck);
var heart = [];
var heartsDeck = createDeck('hearts', heart);
var diamond = [];
var diamondsDeck = createDeck('diamonds', diamond);
var the26Two = heartsDeck.concat(diamondsDeck);
var fullDeck = the26One.concat(the26Two);
var shuffledCards = _.shuffle(fullDeck);
var hand1 = [shuffledCards[0], shuffledCards[1]];
var hand2 = [shuffledCards[2], shuffledCards[3]];
var hand3 = [shuffledCards[4], shuffledCards[5]];
var hand4 = [shuffledCards[6], shuffledCards[7]];

function createDeck(suit, list) {
  for (var i = 2; i < 11; i++) {
    var newCard = { rank: i, suit: suit };
    list.push(newCard);
  }
  var newJack = { rank: 'Jack', suit: suit };
  list.push(newJack);
  var newQueen = { rank: 'Queen', suit: suit };
  list.push(newQueen);
  var newKing = { rank: 'King', suit: suit };
  list.push(newKing);
  var newAce = { rank: 'Ace', suit: suit };
  list.push(newAce);
  return list;
}
var player1 = {
  name: 'Skip Bayless',
  hand: hand1
};
var player2 = {
  name: 'Shannon Sharpe',
  hand: hand2
};
var player3 = {
  name: 'Stephen A',
  hand: hand3
};
var player4 = {
  name: 'Ray L',
  hand: hand4
};
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
