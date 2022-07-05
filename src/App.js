import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import AlbumPage from "./components/AlbumPage";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/album-page" element={<AlbumPage />}></Route>
        <Route path="/details-page/:id" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
