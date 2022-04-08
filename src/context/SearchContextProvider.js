import axios from "axios";
import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../constants/api";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const getResults = async (type) => {
    const options = {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "81a0120b97mshb9d5464f3ebd938p1469e7jsn8e97aaa79c40",
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}${type}`, options);

      const data = response.data;

      setResults(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return <SearchContext.Provider value={{ getResults, results, searchWord, setSearchWord, loading }}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
