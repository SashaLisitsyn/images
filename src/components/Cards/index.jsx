import './styles.css';

import Card from '../Card';

const Cards = ({ data }) => {
  return (
    <ul className="cards">
      {data?.results.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
};

export default Cards;
