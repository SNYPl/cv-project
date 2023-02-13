import React, { useContext, useEffect } from "react";
import style from "./style.module.css";
import PersonalInfo from "./personalInfo/PersonalInfo";
import CVShow from "./cvShow/CvShow";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import { formContext } from "../store/formContext";
import axios from "axios";

const CvCreate = () => {
  const { page, setPage } = useContext(formContext);

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) =>
        localStorage.setItem("magisters", JSON.stringify(res.data))
      );
  }, []);

  const pageLocal = JSON.parse(localStorage.getItem("page"));

  return (
    <div className={style.mainSection}>
      {pageLocal.page === "person" && <PersonalInfo />}
      {pageLocal.page === "experiences" && <Experience />}
      {pageLocal.page === "education" && <Education />}
      <section className={style.cvShow}>
        <CVShow />
      </section>
    </div>
  );
};

export default CvCreate;
