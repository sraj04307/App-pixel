import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { fetchDataFromApi } from "./Api.js";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const Appcontext = ({ children }) => {
  const [query, setQuery] = useState(null);
  const [singleimagedata, setsingleimagedata] = useState();
  const [searchpageNumber, setsearchpageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const [pageNumber, setpageNumber] = useState(generateRandomNumber);
  const [showSingleimage, setshowSingleimage] = useState(false);
  const [showdownOptions, setshowdownOptions] = useState(false);

  const searchkeyword = (word) => {
    setQuery(word);
    setLoading(true);
    setData([]);
    setsearchpageNumber(1);
    navigate("/Searchpage");
  };

    const increment = () =>{
      setpageNumber((prevstate)=>prevstate+1);
      setsearchpageNumber((prevstate)=>prevstate+1);
      setLoading(true);
    };

    const decrement = () =>{
      setpageNumber((prevstate)=>{
            if(pageNumber===1)
            return 1;
            else
                return prevstate-1;
        })
        setsearchpageNumber((prevstate)=>{
          if(searchpageNumber===1)
          return 1;
          else
              return prevstate-1;
      })
        setLoading(true);
    };

  
  
  const navigate = useNavigate();

 

  const onsearchChange = (e) => {
    setQuery(e.target.value);
    setsearchpageNumber(1);
    setLoading(true);
    setData(null);
    navigate("/Searchpage");
    
  };

  const handleDownload = () => {
    saveAs(singleimagedata?.src?.original, singleimagedata?.alt + ".png");
  };
  

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        data,
        setData,
        Loading,
        setLoading,
        pageNumber,
        setpageNumber,
        searchpageNumber, 
        setsearchpageNumber,
        showSingleimage, 
        setshowSingleimage,
        singleimagedata, 
        setsingleimagedata,
        showdownOptions, 
        setshowdownOptions,
        handleDownload,
        increment,
        decrement,
        searchkeyword,
        onsearchChange
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Appcontext;
