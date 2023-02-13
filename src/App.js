import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/Main";
import CvCreate from "./components/CVcreateSection";
import { FormProvider, defaultValue } from "./store/formContext";
import FinalCv from "./components/finalCv/FinalCv";

function App() {
  const checklocal = localStorage.getItem("form");
  const checklocalPage = localStorage.getItem("page");
  if (checklocal === null) {
    localStorage.setItem("form", JSON.stringify(defaultValue));
  }

  if (checklocalPage === null) {
    localStorage.setItem("page", JSON.stringify({ page: "person" }));
  }

  localStorage.setItem("imgBase", JSON.stringify(""));

  return (
    <FormProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/cv-page" element={<CvCreate />} />
          <Route path="/cv" element={<FinalCv />} />
        </Routes>
      </div>
    </FormProvider>
  );
}

export default App;
