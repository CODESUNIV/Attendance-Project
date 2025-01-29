// src/services/professorService.js
import axios from 'axios';

export const getProfessors = async () => {
  try {
    const response = await axios.get('http://api-attendance.myvirtualassistant.fr/adminprofessors');
    return response.data;
  } catch (error) {
    console.error('Error fetching professors:', error);
    return [];
  }
};
