import { useState, useRef } from "react";
import CardGame from "./CardGame";

export default function Cards() {
  const [cards, setCards] = useState(
    [
      { id: 0, name: "Space", status: "", img: "/picture/01.png" },
      { id: 0, name: "Space", status: "", img: "/picture/01.png" },
      { id: 1, name: "Sun", status: "", img: "/picture/02.png" },
      { id: 1, name: "Sun", status: "", img: "/picture/02.png" },
      { id: 2, name: "Saturn", status: "", img: "/picture/03.png" },
      { id: 2, name: "Saturn", status: "", img: "/picture/03.png" },
      { id: 3, name: "Astronaut", status: "", img: "/picture/04.png" },
      { id: 3, name: "Astronaut", status: "", img: "/picture/04.png" },
      { id: 4, name: "Moon", status: "", img: "/picture/05.png" },
      { id: 4, name: "Moon", status: "", img: "/picture/05.png" },
      { id: 5, name: "Couple", status: "", img: "/picture/06.png" },
      { id: 5, name: "Couple", status: "", img: "/picture/06.png" },
      { id: 6, name: "Mars", status: "", img: "/picture/07.png" },
      { id: 6, name: "Mars", status: "", img: "/picture/07.png" },
      { id: 7, name: "Base", status: "", img: "/picture/08.png" },
      { id: 7, name: "Base", status: "", img: "/picture/08.png" },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);

   const [showModal, setShowModal] = useState(false);

  const matchCheck = (currentCard) => {
    const newCards = [...cards];

    if (newCards[currentCard].id === newCards[previousCardState].id) {
      newCards[previousCardState].status = "active matched";
      newCards[currentCard].status = "active matched";
    } else {
      newCards[currentCard].status = "active";
      setCards(newCards);

      setTimeout(() => {
        newCards[previousCardState].status = "";
        newCards[currentCard].status = "";
        setCards([...newCards]); 
      }, 1000);
    }

    setPreviousCardState(-1);
    setCards(newCards);
  };

  const clickHandler = (index) => {
    if (index !== previousIndex.current && cards[index].status !== "active matched") {
      if (previousCardState === -1) {
        previousIndex.current = index;
        const newCards = [...cards];
        newCards[index].status = "active";
        setCards(newCards);
        setPreviousCardState(index);
      } else {
        matchCheck(index);
        previousIndex.current = -1;
      }
    } else if (cards[index].status === "active matched" || index === previousIndex.current) {
      setShowModal(true); 
    }
  };

  return (
    <div className="container">
      {cards.map((card, index) => (
        <CardGame key={index} card={card} index={index} clickHandler={clickHandler} />
      ))}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>This card is already selected.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
