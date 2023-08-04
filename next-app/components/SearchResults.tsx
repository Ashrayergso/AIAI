import React from 'react';
import { Agent } from '../utils/types';
import AgentCard from './AgentCard';
import styles from '../styles/SearchResults.module.css';

interface SearchResultsProps {
  agents: Agent[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ agents }) => {
  return (
    <div className={styles.resultsContainer}>
      {agents.length > 0 ? (
        agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)
      ) : (
        <p className={styles.noResults}>No agents found</p>
      )}
    </div>
  );
};

export default SearchResults;