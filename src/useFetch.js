import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(null);
      });
  }, []);

  return data;
};
