const randomCards = (deck) => {
  const fewRandomCards = [];
  let remainingCardDeck = [...deck];

  if (remainingCardDeck.length >= 5) {
    for (let i = 0; i < 5; i++) {
      const randomVal = Math.floor(Math.random() * remainingCardDeck.length);
      fewRandomCards.push(remainingCardDeck[randomVal]);
      remainingCardDeck.splice(randomVal, 1);
    }
  } else {
    fewRandomCards.push(remainingCardDeck[0], remainingCardDeck[1]);
    remainingCardDeck = [];
  }
  const cardCount = remainingCardDeck.length;
  const aceArray = remainingCardDeck.filter((card) => card[1] === 'A');
  const aceCount = aceArray.length;

  return {
    remainingCardDeck,
    fewRandomCards,
    cardCount,
    aceCount,
  };
};

export default randomCards;
