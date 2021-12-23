import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import HomePage from "./pages/Home";
import NewPage from "./pages/NewPage";
import NewSecondPage from "./pages/NewSecondPage";



function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new-page" element={<NewPage />}></Route>
        <Route path="/new-second-page" element={<NewSecondPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
