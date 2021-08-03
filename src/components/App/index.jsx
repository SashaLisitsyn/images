import { useEffect, useState } from 'react';

import api from '../../lib/services/api';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Cards from '../Cards';
import Pages from '../Pages';
import Footer from '../Footer';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const onSearch = () => {
    api
      .search(query)
      .then((data) => {
        setData(data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    api
      .search(query, page)
      .then((data) => {
        setData(data);
      })
      .catch(() => {});
  }, [page]);

  return (
    <>
      <Header />
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      <Cards data={data} />
      <Pages data={data} setPage={setPage} />
      <Footer />
    </>
  );
};

export default App;
