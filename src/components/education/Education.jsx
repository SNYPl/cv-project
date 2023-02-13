import React, { useState, useContext, useEffect } from "react";
import style from "./style.module.css";
import EducationForm from "./educationForm1";
import { formContext, defaultValue } from "../../store/formContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Education = () => {
  let navigate = useNavigate();
  const { cvForm, setCvForm, setPage, page } = useContext(formContext);
  const form = JSON.parse(localStorage.getItem("form"));
  const magisters = JSON.parse(localStorage.getItem("magisters"));

  const experiences = form.experiences.map((i, n) => {
    return {
      position: i.position.value,
      employer: i.employer.value,
      start_date: i.start_date.value,
      due_date: i.due_date.value,
      description: i.description.value,
    };
  });

  const educationDegree = form.educations.map((i, n) => {
    return {
      degree_id: magisters.find((m) => {
        if (m.title === i.degree.value) {
          const { id, title } = m;
          return id;
        }
      }),
    };
  });
  const educations = form.educations.map((i, n) => {
    return {
      institute: i.institute.value,
      degree_id: educationDegree[n].degree_id?.id,
      due_date: i.due_date.value,
      description: i.description.value,
    };
  });

  const dataType64toFile = (dataurl, filename = "NewFile") => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let newFile = new File([u8arr], filename, {
      type: mime,
    });
    return newFile;
  };

  const dataObject = {
    name: form.name.value,
    surname: form.lastName.value,
    email: form.email.value,
    phone_number: form.phone_number.value,
    experiences: [...experiences],
    educations: [...educations],
    image: dataType64toFile(form.image.base),
    about_me: form.about_me,
  };

  const addMoreForm = () => {
    const obj = {
      institute: {
        value: "",
        helper: "მინიმუმ 2 სიმბოლო",
        error: false,
        success: false,
      },
      degree: { value: "", error: false, success: false },
      due_date: { value: "", error: false, success: false },
      description: { value: "", error: false, success: false },
    };

    setCvForm((prevState) => ({
      ...prevState,
      educations: [...prevState.educations, obj],
    }));

    localStorage.setItem(
      "form",
      JSON.stringify({
        ...form,
        educations: [...form.educations, obj],
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

  const submitInfo = () => {
    axios
      .post("https://resume.redberryinternship.ge/api/cvs", dataObject, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        localStorage.setItem(
          "cv",
          JSON.stringify({
            ...res.data,
          })
        );
        let path = `/cv`;
        navigate(path);
      });
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
          <h2>განათლება</h2>

          <div className={style.pageCount}>3/3</div>
        </div>
      </section>

      {form.educations.map((i, index) => (
        <EducationForm id={index} key={index} />
      ))}

      <div className={style.addBtn}>
        <button onClick={addMoreForm}>სხვა სასწავლებლის დამატება</button>
      </div>

      <div className={style.nextBtn}>
        <button
          onClick={() => {
            setPage("experiences");
            localStorage.setItem(
              "page",
              JSON.stringify({
                page: "experiences",
              })
            );
          }}
        >
          უკან
        </button>
        <button
          onClick={submitInfo}
          className={
            form.educations[0].institute.success &&
            form.educations[0].degree.success &&
            form.educations[0].due_date.success &&
            form.educations[0].description.success
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

export default Education;
