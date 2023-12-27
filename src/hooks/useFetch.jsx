import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      // const res = await fetch(url);
      // const item = await res.json();
      const { data: item } = await axios(url);
      setData(item);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, isError };
};
