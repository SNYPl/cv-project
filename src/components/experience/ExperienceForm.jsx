import React from "react";
import style from "./style.module.css";
import Input from "../input/Input";

const EducationForm = () => {
  return (
    <section className={style.eduInputs}>
      <div className={style.position}>
        <Input
          label="თანამდებობდა"
          type="text"
          placeholder="დეველოპერი,დიზაინერი და ა.შ"
          name=""
          required={true}
          helper="მინიმუმ 2 სიმბოლო"
        />
      </div>
      <div className={style.employer}>
        <Input
          label="დამსაქმებელი"
          type="text"
          placeholder="დამსაქმებელი"
          name=""
          required={true}
          helper="მინიმუმ 2 ასო. ქართული ასოები"
        />
      </div>
      <div className={style.dateInputs}>
        <Input
          label="დაწყების რიცხვი"
          type="date"
          placeholder=""
          name="date"
          required={true}
          helper=""
        />
        <Input
          label="დამთავრების რიცხვი"
          type="date"
          placeholder=""
          name="date"
          required={true}
          helper=""
        />
      </div>

      <div className={style.textArea}>
        <p>აღწერა</p>
        <textarea
          rows="8"
          cols="80"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        />
      </div>
      <section className={style.brder}>
        <div></div>
      </section>
    </section>
  );
};

export default EducationForm;
