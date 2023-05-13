import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const useRequest = () => {
  const [process, setProcess] = useState('loading');

  const request = useCallback(async (url, params) => {
      try {
          const response = await axios.get(url, params);

          const data = response.data;
          setProcess('fetched')
          return data
      } catch (e) {
          setProcess('error')
          throw e;
      }


  }, []);

  return {request, process, setProcess}

}