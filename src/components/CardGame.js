export default function Card({ card, index, clickHandler }) {
    const cardClassName = card.status ? 'active' : '';
  
    return (
      <div className={`card ${cardClassName}`} onClick={() => clickHandler(index)}>
        <img src={card.img} alt={card.name} />
      </div>
    );
  }
  