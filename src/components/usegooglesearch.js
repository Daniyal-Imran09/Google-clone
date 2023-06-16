import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "Use your own Context key";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data using the term and API_KEY
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      const searchData = await response.json();
      setData(searchData);
    };

    fetchData();
  }, [term]);
//console.log(data)
  return { data };
};

export default useGoogleSearch;
