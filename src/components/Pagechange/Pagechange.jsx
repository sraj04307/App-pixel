import React, { useContext, useState } from "react";
import "./Pagechange.scss";
import { Context } from "../../../Context";

const Pagechange = () => {
  const { increment, decrement } =
    useContext(Context);


  return (
    <div className="div-page-contains">
      <div className="divpage">
        <button className="prev-button" onClick={decrement}>
          Prev
        </button>
        <button className="next-button" onClick={increment}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagechange;
