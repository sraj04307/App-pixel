import React, { useEffect, useContext } from "react";
import Imagecard from "../Imagecard/Imagecard";
import { fetchDataFromApi } from "../../../Api";
import "./Searchpage.scss";
import Pagechange from "../Pagechange/Pagechange";
import { GridLoader } from "react-spinners";
import { Context } from "../../../Context";
import { useNavigate } from "react-router-dom";
import Singleimage from "../Imagecard/Singleimage/Singleimage";

const Searchpage = () => {
  const {query, data, setData, Loading, setLoading,reload, setReload, searchpageNumber, setsearchpageNumber, showSingleimage ,increment, decrement } = useContext(Context);
  const navig =useNavigate();
  
  const getsearchdata = () =>{
    fetchDataFromApi(
      `https://api.pexels.com/v1/search/?page=${searchpageNumber}&per_page=40&query=${query}`
    )
      .then((res) => {
        setData(res.photos);
        setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (query === "") {
      navig("/");
    };
    getsearchdata();
    
  }, [query ,searchpageNumber]);


  
  

  return (
    <>
      {Loading ? (
        <div className="search-gridloader">
          <GridLoader size="30px" color="#000000" margin={2}/>
        </div>
      ) : (
        <>
          <div className="search-container">
            {data?.map((photo, index) => (
              <div key={index} className="search-Imagecard-container">
                <Imagecard
                  item={photo}
                  photo={photo?.src?.original}
                  index={index}
                  photographer={photo?.photographer}
                  photographerUrl={photo.photographer_url}
                  alt={photo.alt}
                />
              </div>
            ))}
          </div>
          <div className="search-pagechange-container">
            <Pagechange />
          </div>
          {showSingleimage && <Singleimage/>}
        </>

      )}
    </>
  );
};

export default Searchpage;
