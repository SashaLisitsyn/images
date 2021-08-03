import './styles.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img
        src={card.urls.small}
        className="card__img card-img-top"
        alt={card.user.name}
      />
      <div className="card-body">
        <h5 className="card-title">{card.user.name}</h5>
        <p className="card-text">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
