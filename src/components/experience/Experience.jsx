import React, { useState, useContext, useEffect } from "react";
import style from "./style.module.css";
import ExperienceForm from "./ExperienceForm";
import { formContext, defaultValue } from "../../store/formContext";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const { cvForm, setCvForm, setPage } = useContext(formContext);

  const form = JSON.parse(localStorage.getItem("form"));
  const page = JSON.parse(localStorage.getItem("page"));
  let navigate = useNavigate();

  useEffect(() => {
    setPage({ ...page });
  }, []);

  const addMoreForm = () => {
    const obj = {
      position: {
        value: "",
        helper: "მინიმუმ 2 სიმბოლო",
        error: false,
        success: false,
      },
      employer: {
        value: "",
        helper: "მინიმუმ 2 სიმბოლო",
        error: false,
        success: false,
      },
      start_date: { value: "", error: false, success: false },
      due_date: { value: "", error: false, success: false },
      description: { value: "", error: false, success: false },
    };

    setCvForm((prevState) => ({
      ...prevState,
      experiences: [...prevState.experiences, obj],
    }));

    localStorage.setItem(
      "form",
      JSON.stringify({
        ...form,
        experiences: [...form.experiences, obj],
      })
    );
  };

  const refreshPage = () => {
    window.localStorage.removeItem("form");
    setCvForm(defaultValue);
    let path = `/`;
    navigate(path);

    localStorage.setItem(
      "page",
      JSON.stringify({
        page: "person",
      })
    );
  };

  return (
    <div className={style.educationContainer}>
      <section className={style.educationTitle}>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={refreshPage}
        >
          <path
            d="M8.85769 0.352185C9.0832 0.577756 9.20988 0.883657 9.20988 1.20262C9.20988 1.52157 9.0832 1.82747 8.85769 2.05305L2.90348 8.00726L8.85769 13.9615C9.0768 14.1883 9.19805 14.4922 9.19531 14.8076C9.19257 15.123 9.06606 15.4247 8.84304 15.6477C8.62002 15.8707 8.31832 15.9972 8.00293 16C7.68754 16.0027 7.3837 15.8815 7.15683 15.6623L0.352185 8.85769C0.126681 8.63212 0 8.32622 0 8.00726C0 7.6883 0.126681 7.3824 0.352185 7.15683L7.15683 0.352185C7.3824 0.126681 7.6883 0 8.00726 0C8.32622 0 8.63212 0.126681 8.85769 0.352185Z"
            fill="#2E2E2E"
          />
        </svg>
        <div className={style.eduCont}>
          <h2>გამოცდილება</h2>

          <div className={style.pageCount}>2/3</div>
        </div>
      </section>

      {form.experiences.map((i, index) => (
        <ExperienceForm id={index} key={index} />
      ))}

      <div className={style.addBtn}>
        <button onClick={addMoreForm}>მეტი გამოცდილების დამატება</button>
      </div>

      <div className={style.nextBtn}>
        <button
          onClick={() => {
            console.log(page);
            setPage("person");
            localStorage.setItem(
              "page",
              JSON.stringify({
                page: "person",
              })
            );
          }}
        >
          უკან
        </button>
        <button
          onClick={() => {
            setPage("education");
            localStorage.setItem(
              "page",
              JSON.stringify({
                page: "education",
              })
            );
          }}
          className={
            form.experiences[0].position.success &&
            form.experiences[0].employer.success &&
            form.experiences[0].start_date.success &&
            form.experiences[0].due_date.success &&
            form.experiences[0].description.success
              ? ""
              : style.disableBtn
          }
        >
          შემდეგი
        </button>
      </div>
    </div>
  );
};

export default Experience;
