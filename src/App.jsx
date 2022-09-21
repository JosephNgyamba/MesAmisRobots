import React from "react";
import Robots from "./components/Robot";
import Detail from "./components/details";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Robots />}></Route>
        <Route path="/details/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
