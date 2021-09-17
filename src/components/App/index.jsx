import { useState } from 'react';

import api from '../../lib/services/api';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Cards from '../Cards';
import Footer from '../Footer';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState();

  const onSearch = () => {
    api
      .search(query)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch(() => {});
  };

  return (
    <>
      <Header />
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      <Cards data={data} />
      <Footer />
    </>
  );
};

export default App;
