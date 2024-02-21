import { useEffect, useState } from 'react';

const useGetCharacters= () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 



  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:');
        setError(error); 
      } finally {
        setLoading(false); 
      }
        
    };

    fetchCharacter();
  }, []);

  return { characters, loading, error }; 
};

export default useGetCharacters;
