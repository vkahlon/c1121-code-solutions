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
var ranks = grabRankings(player1, player2, player3, player4);
function grabRankings(player1, player2, player3, player4) {
  var theTable = [];
  var getPlayer1Rank1 = getARank(player1.hand[0].rank);
  var getPlayer1Rank2 = getARank(player1.hand[1].rank);
  var getPlayer1TotalRank = getPlayer1Rank1 + getPlayer1Rank2;

  var getPlayer2Rank1 = getARank(player2.hand[0].rank);
  var getPlayer2Rank2 = getARank(player2.hand[1].rank);
  var getPlayer2TotalRank = getPlayer2Rank1 + getPlayer2Rank2;

  var getPlayer3Rank1 = getARank(player3.hand[0].rank);
  var getPlayer3Rank2 = getARank(player3.hand[1].rank);
  var getPlayer3TotalRank = getPlayer3Rank1 + getPlayer3Rank2;

  var getPlayer4Rank1 = getARank(player4.hand[0].rank);
  var getPlayer4Rank2 = getARank(player4.hand[1].rank);
  var getPlayer4TotalRank = getPlayer4Rank1 + getPlayer4Rank2;

  var player1Rank = { name: 'Skip Bayless', points: getPlayer1TotalRank };
  var player2Rank = { name: 'Shannon Sharpe', points: getPlayer2TotalRank };
  var player3Rank = { name: 'Stephen A', points: getPlayer3TotalRank };
  var player4Rank = { name: 'Ray L', points: getPlayer4TotalRank };
  theTable.push(player1Rank);
  theTable.push(player2Rank);
  theTable.push(player3Rank);
  theTable.push(player4Rank);
  function getARank(card) {
    if (card === 'Jack' || card === 'Queen' || card === 'King') {
      card = 10;
      return card;
    } else if (card === 'Ace') {
      card = 11;
      return card;
    } else {
      return card;
    }
  }
  return theTable;
}
var grabWinnerList = _.sortBy(ranks, ['points']);
console.log('The winner is ' + grabWinnerList[3].name + ' who had ' + grabWinnerList[3].points + ' points.');
console.log('Second place is ' + grabWinnerList[2].name + ' who had ' + grabWinnerList[2].points + ' points.');
console.log('Third place is ' + grabWinnerList[1].name + ' who had ' + grabWinnerList[1].points + ' points.');
console.log('Fourth place is ' + grabWinnerList[0].name + ' who had ' + grabWinnerList[0].points + ' points.');
