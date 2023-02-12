import React from "react";
import style from "./style.module.css";
import logo from "../../assets/img/logo.png";
import dashboardImg from "../../assets/img/background.png";
import centerLogo from "../../assets/img/centerLogo.png";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  function startCreateCv() {
    navigate("/cv-page");
  }

  return (
    <div
      className={style.mainPage}
      style={{ backgroundImage: "url(" + dashboardImg + ")" }}
    >
      <header className={style.header}>
        <div className={style.headerCont}>
          <img src={logo} alt="logo" />
        </div>
      </header>

      <section className={style.buttonSection}>
        <div className={style.buttonCont}>
          <button onClick={startCreateCv}>რეზიუმეს დამატება</button>
          <img src={centerLogo} alt="logo" />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
