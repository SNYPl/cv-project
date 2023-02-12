import React, { useState } from "react";
import style from "./style.module.css";
import PersonalInfo from "./personalInfo/PersonalInfo";
import CVShow from "./cvShow/CvShow";
import Experience from "./experience/Experience";
import Education from "./education/Education";

const CvCreate = () => {
  const [page, setPage] = useState("person");
  return (
    <div className={style.mainSection}>
      <section className={style.cvCreate}>
        {page === "person" && <PersonalInfo setPage={setPage} />}
        {page === "experience" && <Experience setPage={setPage} />}
        {page === "education" && <Education setPage={setPage} />}
      </section>
      <section className={style.cvShow}>
        <CVShow />
      </section>
    </div>
  );
};

export default CvCreate;
