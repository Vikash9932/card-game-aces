const newDeck = () => {
  const suits = ['Spade', 'Diamond', 'Clover', 'Heart'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const deck = [];

  for (let i = 0; i < suits.length; i++)
    for (let j = 0; j < ranks.length; j++) deck.push([suits[i], ranks[j]]);
  return deck;
};

export default newDeck;
