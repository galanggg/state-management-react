import React from 'react';

export function useFetch(url) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setResponse(null);
    setError(null);

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, []);

  return [response, loading, error];
}
