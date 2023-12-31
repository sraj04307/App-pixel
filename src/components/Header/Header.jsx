import React ,{useContext, useState}from "react";
import "./Header.scss";
import logo from "./../../res/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import keywords from "../../../content";
import { Context } from "../../../Context";
import { useNavigate } from "react-router-dom";

const Header=()=>{ 
    const {query,
        setQuery ,onsearchChange,searchkeyword} = useContext(Context);
    const headnav = useNavigate();

    const nav=()=>{
        headnav("/")
    }

    return(
        <div className="Header-div">
            <div className="Header-top">
                <div className="header-top-left">
                   <img src={logo} alt="logo" onClick={nav}/>
                </div>
                <div className="header-top-middle">
                    <div className="Header-search">
                        <input type="search" placeholder="Search..." onChange={onsearchChange}/>
                        
                    </div>
                </div>
                <div className="header-top-right">
                    <span onClick={nav}> Home</span>
                    <span onClick={()=>alert("under Devlopement")}> Explore</span>
                </div>

            </div>
            <div className="header-bottom">
                {/* <div className="Header-bottom-left">
                <FaChevronLeft />
                </div> */}
                <div className="Header-bottom-middle">
                    {keywords.map((word,index)=>(
                        <p key={index}  onClick={() => {
                            searchkeyword(word);
                          }}>{word}</p>
                    ))}
                    
                </div>
                {/* <div className="Header-bottom-right">
                <FaChevronRight />
                </div> */}

            </div>
            
        </div>
    )
}

export default Header;
