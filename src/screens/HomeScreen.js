import React, { useState, useEffect } from "react";
import CardCount from "../components/CardCount";
import DealButton from "../components/DealButton";
import DisplayCards from "../components/DisplayCards";
import { Win, Lose } from "../components/Outcome";
import PlayAgainButton from "../components/PlayAgainButton";
import ResetButton from "../components/ResetButton";
import newDeck from "../utils/newDeck";
import randomCards from "../utils/randomCards";

const HomeScreen = () => {
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardsCount, setCardsCount] = useState(52);
  const [acesCount, setAcesCount] = useState(4);
  const [outcome, setOutcome] = useState("");

  const handleResetButton = () => {
    const { remainingCardDeck, fewRandomCards, cardCount, aceCount } =
      randomCards(newDeck());
    setDeck(remainingCardDeck);
    setCards(fewRandomCards);
    setCardsCount(cardCount);
    setAcesCount(aceCount);
    setOutcome("");
  };

  const handleDealButton = () => {
    if (cards.length > 2) {
      const { remainingCardDeck, fewRandomCards, cardCount, aceCount } =
        randomCards(deck);
      setDeck(remainingCardDeck);
      setCards(fewRandomCards);
      setCardsCount(cardCount);
      setAcesCount(aceCount);
    }
  };

  useEffect(() => {
    if (acesCount === 0 && cardsCount !== 0) {
      setOutcome("Lose");
    }
    if (acesCount === 0 && cardsCount === 0) {
      setOutcome("Win");
    }
  }, [acesCount, cardsCount]);

  useEffect(() => {
    handleResetButton();
  }, []);

  return (
    <main>
      <CardCount cardsCount={cardsCount} acesCount={acesCount} />
      {outcome === "Win" && <Win />}
      <DisplayCards deck={deck} cards={cards} />
      {outcome === "Lose" && <Lose />}
      {outcome === "" ? (
        <DealButton handleDealButton={handleDealButton} />
      ) : (
        <PlayAgainButton handleResetButton={handleResetButton} />
      )}
      {outcome === "" && <ResetButton handleResetButton={handleResetButton} />}
    </main>
  );
};

export default HomeScreen;
