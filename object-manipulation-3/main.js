console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerList = [
  {
    name: 'Skip Bayless',
    hand: null
  },
  {
    name: 'Shannon Sharpe',
    hand: null
  },
  {
    name: 'Stephen A',
    hand: null
  },
  {
    name: 'Ray L',
    hand: null
  }];
startsGame(playerList);
function startsGame(playerList) {
  var ranks = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];
  var suits = ['hearts', 'clubs', 'diamonds', 'spades'];
  var fullDeck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var newCard = { rank: ranks[j], suit: suits[i] };
      fullDeck.push(newCard);
    }
  }
  var shuffledCards = _.shuffle(fullDeck);
  for (i = 0; i < playerList.length; i++) {
    playerList[i].hand = [shuffledCards[i]];
    shuffledCards = shuffledCards.splice(i);
    playerList[i].hand.push(shuffledCards[i + 1]);
    shuffledCards = shuffledCards.splice(i + 1);
  }
  var getRank = grabRankings(playerList);
  function grabRankings(playerList) {
    var theTable = [];
    for (var i = 0; i < playerList.length; i++) {
      var getPlayerName = playerList[i].name;
      var getPlayerRank1 = getARank(playerList[i].hand[0].rank);
      var getPlayerRank2 = getARank(playerList[i].hand[1].rank);
      var getPlayer1TotalRank = getPlayerRank1 + getPlayerRank2;
      var playerStats = { name: getPlayerName, points: getPlayer1TotalRank };
      theTable.push(playerStats);
    }
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
  var grabWinnerList = _.sortBy(getRank, ['points']);
  var getPlayerCount = grabWinnerList.length - 1;
  if (grabWinnerList[getPlayerCount].points !== grabWinnerList[getPlayerCount - 1].points) {
    console.log('The winner is ' + grabWinnerList[getPlayerCount].name + ' who had ' + grabWinnerList[getPlayerCount - 1].points + ' points.');
  } else {
    console.log('TIE BREAKER!');
    var newGame = [];
    var grabTieBreakerPlayer1 = { name: grabWinnerList[getPlayerCount - 1].name, hand: null };
    var grabTieBreakerPlayer2 = { name: grabWinnerList[getPlayerCount].name, hand: null };
    newGame.push(grabTieBreakerPlayer1);
    newGame.push(grabTieBreakerPlayer2);
    startsGame(newGame);
  }
  return grabWinnerList;
}
