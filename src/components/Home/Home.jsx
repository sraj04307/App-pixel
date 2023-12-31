import React, { useState, useEffect, useContext } from "react";
import Imagecard from "../Imagecard/Imagecard";
import { fetchDataFromApi } from "../../../Api";
import "../Home/Home.scss";
import Pagechange from "../Pagechange/Pagechange";
import { GridLoader } from "react-spinners";
import { Context } from "../../../Context";
import Singleimage from "../Imagecard/Singleimage/Singleimage";

const Home = () => {
  const {data, setData, Loading, setLoading, pageNumber, setpageNumber,showSingleimage } = useContext(Context);


  useEffect(() => {
    getData();
  }, [pageNumber]);
  
  const getData = () => {
    fetchDataFromApi(
      `https://api.pexels.com/v1/curated/?per_page=40&page=${pageNumber}`
    )
      .then((res) => {
        setData(res.photos);
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return (
    <>
      {Loading ? (
        <div className="gridloader">
          <GridLoader size="30px" color="#000000" margin={2}/>
        </div>
      ) : (
        <>
          <div className="Home-container">
            {data?.map((photo, index) => (
              <div key={index} className="Imagecard-container" >
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
          <div className="pagechange-container">
            <Pagechange />
          </div>
          {showSingleimage && <Singleimage/>}
        </>
      )}
    </>
  );
};

export default Home;
