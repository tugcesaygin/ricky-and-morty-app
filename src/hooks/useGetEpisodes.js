import { useEffect, useState } from 'react';

const useGetEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 



  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();
        setEpisodes(data.results);
      } catch (error) {
        console.error('Error fetching episodes:');
        setError(error); 
      } finally {
        setLoading(false); 
      }
        
    };

    fetchEpisodes();
  }, []);

  return { episodes, loading, error }; 
};

export default useGetEpisodes;
