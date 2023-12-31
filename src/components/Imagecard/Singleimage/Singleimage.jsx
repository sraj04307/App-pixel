import React, { useState } from "react";
import "./Singleimage.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "./../../../res/user.png";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../../Context";
import { FaShare } from "react-icons/fa";
import { saveAs } from "file-saver";
import crounch from "./../../../res/crounch.jpg";

const Singleimage = () => {
  const {
    showSingleimage,
    setshowSingleimage,
    singleimagedata,
    setsingleimagedata,
    handleDownload,
  } = useContext(Context);

  

  const cancelclick = () => {
    setshowSingleimage(false);
  };

  console.log(singleimagedata);

  return (
    <div className="Singleimge-container-div" onClick={cancelclick}>
      <div className="cancel" onClick={cancelclick}>
        <MdCancel size={30} />
      </div>
      <div className="Singleimge-container">
        <div className="Singleimage">
          <div className="image">
            <div className="desc-container">
              <div className="desc">
                <div className="src">
                  <img src={logo} />
                </div>

                <a href={singleimagedata?.photographer_url} target="">
                  <span>By: {singleimagedata?.photographer}</span>
                </a>
              </div>
              <div className="download-div">
                <button className="download-button" onClick={handleDownload}>
                  Download
                </button>
                <div className="size-button">
                  <RiArrowDropDownLine
                    size={30}
                    onClick={() => {
                      alert("page is under development");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="img-container">
              <img
                src={singleimagedata?.src?.original}
              />
            </div>
            <div className="othetr-options">
              <div className="othetr-options-data">
                <p>Color: {singleimagedata?.avg_color}</p>
                <p>Height: {singleimagedata?.height}</p>
                <p>Width: {singleimagedata?.width}</p>
              </div>
              <div
                className="share-options"
                onClick={() => alert("Under developement")}
              >
                <FaShare />
                <button>Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleimage;
