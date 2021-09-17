import './styles.css';

import { useSelector } from 'react-redux';

import Card from '../Card';

const Cards = () => {
  const images = useSelector((state) => state.images.imagesList);

  return (
    <ul className="cards">
      {images?.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
};

export default Cards;
