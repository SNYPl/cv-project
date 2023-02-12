import React from "react";
import style from "./style.module.css";
import Input from "../input/Input";

const EducationForm = () => {
  return (
    <section className={style.eduInputs}>
      <div className={style.position}>
        <Input
          label="სასწავლებელი"
          type="text"
          placeholder="სასწავლებელი"
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
        <div className={style.diplom}>
          <label for="diploms">ხარისხი</label>
          <select id="diploms">
            <option value="" disabled selected hidden>
              აირჩიეთ ხარისხი
            </option>
            <option value="საშუალო სკოლის დიპლომი">
              საშუალო სკოლის დიპლომი
            </option>
            <option value="ზოგადსაგანმანათლებლო დიპლომი">
              ზოგადსაგანმანათლებლო დიპლომი
            </option>
            <option value="ბაკალავრი">ბაკალავრი</option>
            <option value="მაგისტრი">მაგისტრი</option>
            <option value="დოქტორი">დოქტორი</option>
            <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
            <option value="სტუდენტი">სტუდენტი</option>
            <option value="კოლეჯი (ხარისხის გარეშე)">
              კოლეჯი (ხარისხის გარეშე)
            </option>
            <option value="სხვა">სხვა</option>
          </select>
        </div>
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
        <textarea rows="8" cols="80" placeholder="განათლების აღწერა" />
      </div>
      <section className={style.brder}>
        <div></div>
      </section>
    </section>
  );
};

export default EducationForm;
