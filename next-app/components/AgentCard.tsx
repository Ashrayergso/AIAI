import React from 'react';
import { Agent } from '../utils/types';
import styles from '../styles/AgentCard.module.css';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className={styles.card}>
      <h2>{agent.name}</h2>
      <p>{agent.description}</p>
      <h3>Instructions</h3>
      <p>{agent.instructions}</p>
      <h3>Examples</h3>
      <ul>
        {agent.examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgentCard;