import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Appcontext from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/components/Home/Home";
import Searchpage from "./src/components/Searchpage/Searchpage";

const App = () => {
  return (
    <BrowserRouter>
      <Appcontext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Searchpage" element={<Searchpage />} />
        </Routes>
      </Appcontext>
    </BrowserRouter>
  );
};

export default App;
