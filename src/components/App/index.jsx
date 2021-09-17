import { useState } from 'react';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Cards from '../Cards';
import Footer from '../Footer';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
