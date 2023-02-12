import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/Main";
import CvCreate from "./components/CVcreateSection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/cv-page" element={<CvCreate />} />
        {/* <Route path="/reset" element={<Reset />} /> */}
      </Routes>
    </div>
  );
}

export default App;
