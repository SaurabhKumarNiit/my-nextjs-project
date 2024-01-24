// pages/search.js
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { query } = router;

      if (query) {
        const { type = 'transplant', organ = 'lungs' } = router.query;

        try {
          setLoading(true);

          console.log('Submitting form:', { type, organ });
          const response = await fetch(`https://api.coc.houseworksinc.co/api/v1/doctors/?type=${type}&organ=${organ}`);
          const result = await response.json();

          // Ensure that the result is an array before setting the state
          if (Array.isArray(result)) {
            setData(result);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [router.query]); // Trigger the effect when the query parameters change

  return (
    <div>
      <h1>Search Results</h1>
      <p>Type: {router.query?.type}</p>
      <p>Organ: {router.query?.organ}</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Results:</h2>
          {data.length > 0 ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
