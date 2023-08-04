import { useState } from 'react';
import { NextPage } from 'next';
import { Agent } from '../utils/types';
import fetchAgents from '../utils/fetchAgents';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import styles from '../styles/Search.module.css';

const Search: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (term: string) => {
    setLoading(true);
    setSearchTerm(term);
    const results = await fetchAgents(term);
    setAgents(results);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResults agents={agents} searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default Search;