import React, { useContext, useState } from "react";
import "./Imagecard.scss";
import { FiDownloadCloud } from "react-icons/fi";
import crounch from "./../../res/crounch.jpg";
import Pagechange from "./../Pagechange/Pagechange.jsx";
import Singleimage from "./Singleimage/Singleimage.jsx";
import { Context } from "../../../Context.js";

const Imagecard = ({ item, photo, alt, photographer, photographerUrl,index }) => {

  const [imagloading , setimageloading] = useState(true);

  const {
    showSingleimage,
    setshowSingleimage,
    singleimagedata,
    setsingleimagedata,
  } = useContext(Context);


  const handlecloudDownload = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating

    setshowSingleimage(false);
    saveAs(photo, alt + ".png");
  };

  const handleImageTextClick = () => {
    setshowSingleimage(true);
    console.log(showSingleimage);
    setsingleimagedata(item);
  };

  return (
    <>
      <div className="Image-container">
        <div className="Image">
          {imagloading? (
            <img className="false-img" src={crounch} key={index} onLoad={()=>setimageloading(false)}  />
          ):(

          <img src={photo} key={index} alt={alt}  />
          )}
          <div className="Image-text" onClick={handleImageTextClick}>
            <div className="text-container">
              <div className="text">
                <div className="text-icon">
                  <a href={photographerUrl} target="_blank" rel="noopener noreferrer">
                    <p>By: {photographer}</p>
                  </a>
                </div>
                <div className="icon" onClick={handlecloudDownload}>
                  <FiDownloadCloud />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagecard;