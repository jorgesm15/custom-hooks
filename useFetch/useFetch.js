import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const getCharacter = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getCharacter();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
