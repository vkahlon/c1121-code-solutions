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
  var emptyDeck = [];
  var clubsDeck = createDeck('clubs', emptyDeck);
  var spadesDeck = createDeck('spades', emptyDeck);
  var the26One = clubsDeck.concat(spadesDeck);
  var heartsDeck = createDeck('hearts', emptyDeck);
  var diamondsDeck = createDeck('diamonds', emptyDeck);
  var the26Two = heartsDeck.concat(diamondsDeck);
  var fullDeck = the26One.concat(the26Two);
  var shuffledCards = _.shuffle(fullDeck);

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
  for (var i = 0; i < playerList.length; i++) {
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
  if (grabWinnerList[getPlayerCount].points === grabWinnerList[getPlayerCount - 1].points) {
    console.log('TIE BREAKER!');
    var newGame = [];
    var grabTieBreakerPlayer1 = { name: grabWinnerList[2].name, hand: null };
    var grabTieBreakerPlayer2 = { name: grabWinnerList[3].name, hand: null };
    newGame.push(grabTieBreakerPlayer1);
    newGame.push(grabTieBreakerPlayer2);
    var startNewRound = startsGame(newGame);
    console.log('The winner is ' + startNewRound[1].name + ' who had ' + startNewRound[1].points + ' points.');
    console.log('The runner-up is ' + startNewRound[0].name + ' who had ' + startNewRound[0].points + ' points.');
  } else if (grabWinnerList.length > 2) {
    console.log('The winner is ' + grabWinnerList[getPlayerCount].name + ' who had ' + grabWinnerList[getPlayerCount - 1].points + ' points.');
    console.log('The runner-up is ' + grabWinnerList[getPlayerCount - 1].name + ' who had ' + grabWinnerList[getPlayerCount - 2].points + ' points.');
  }
  return grabWinnerList;
}
