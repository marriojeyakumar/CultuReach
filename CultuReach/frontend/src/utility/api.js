import axios from 'axios';

const getEvents = async (filters) => {
  try {
    const response = await axios.get('http://localhost:8000/events/', { params: filters });
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the events', error);
    return [];
  }
};

export default getEvents;




