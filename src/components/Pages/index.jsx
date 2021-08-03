import './styles.css';

const Pages = ({ data, setPage }) => {
  return (
    <ul className="pages" role="group" aria-label="First group">
      {!!data &&
        new Array(data.total_pages).fill(null).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPage(index + 1);
            }}
            type="button"
            className="btn btn-outline-secondary"
          >
            {index + 1}
          </button>
        ))}
    </ul>
  );
};

export default Pages;
