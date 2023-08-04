import axios from 'axios';
import { Agent } from './types';

export const fetchAgents = async (task: string): Promise<Agent[]> => {
  try {
    const response = await axios.get(`https://api.llm.com/agents?task=${task}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};