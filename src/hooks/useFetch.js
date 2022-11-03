import { useEffect, useState } from "react";

export default function useFetch({ url, slug }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  if (url === undefined) url = "http://localhost:1337/api/";
  // console.log(url + slug);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url + slug);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, slug]);

  return { loading, error, data };
}
