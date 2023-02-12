import React, { useState } from "react";
import style from "./style.module.css";
import Input from "../input/Input";

const PersonalInfo = ({ setPage }) => {
  const [name, setName] = useState({
    name: {
      value: "",
      helper: "მინიმუმ 2 ასო. ქართული ასოები",
      error: false,
      success: false,
    },
  });
  const [lastName, setLastName] = useState({
    lastName: {
      value: "",
      helper: "მინიმუმ 2 ასო. ქართული ასოები",
      error: false,
      success: false,
    },
  });

  const [aboutMe, setAboutMe] = useState("");

  const [mail, setMail] = useState({
    mail: {
      value: "",
      helper: "უნდა მთავრდებოდეს @redberry.ge-ით",
      error: false,
      success: false,
    },
  });

  const [number, setNumber] = useState({
    mobile: {
      value: "",
      helper: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
      error: false,
      success: false,
    },
  });

  const nameValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "" || value.trim().length < 2) {
      setName((prevState) => ({
        name: {
          ...prevState.name,
          value: value,
          success: false,
          error: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
        },
      }));
    } else if (!/^[ა-ჰ]+$/.test(value)) {
      setName((prevState) => ({
        name: {
          ...prevState.name,
          value: value,
          success: false,
          error: "გამოიყენე ქართული ასოები",
        },
      }));
    } else {
      setName((prevState) => ({
        name: { ...prevState.name, value: value, success: true, error: false },
      }));
    }
  };

  const lastNameValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "" || value.trim().length < 2) {
      setLastName((prevState) => ({
        lastName: {
          ...prevState.lastName,
          value: value,
          success: false,
          error: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
        },
      }));
    } else if (!/^[ა-ჰ]+$/.test(value)) {
      setLastName((prevState) => ({
        lastName: {
          ...prevState.lastName,
          value: value,
          success: false,
          error: "გამოიყენე ქართული ასოები",
        },
      }));
    } else {
      setLastName((prevState) => ({
        lastName: {
          ...prevState.lastName,
          value: value,
          success: true,
          error: false,
        },
      }));
    }
  };

  const mailValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setMail((prevState) => ({
        mail: {
          ...prevState.mail,
          value: value,
          success: false,
          error: "შეიყვანეთ მეილი",
        },
      }));
    } else if (!/^[\w.+-]+@redberry\.ge$/.test(value)) {
      setMail((prevState) => ({
        mail: {
          ...prevState.mail,
          value: value,
          success: false,
          error: "არასწორი მეილი",
        },
      }));
    } else {
      setMail((prevState) => ({
        mail: {
          ...prevState.mail,
          value: value,
          success: true,
          error: false,
        },
      }));
    }
  };

  const mobileValidation = (e) => {
    const regex = /^[0-9 ()+]+$/;
    const value = e.target.value;
    if (value === "" || !regex.test(value)) {
      return;
    }

    setNumber((prevState) => ({
      mobile: { ...prevState.number, value: value },
    }));

    if (
      value.trim().slice(0, 4).toString() === "+995" &&
      value.trim().length === 13
    ) {
      setNumber((prevState) => ({
        mobile: {
          ...prevState.number,
          value: value,
          success: true,
          error: false,
        },
      }));
    } else {
      setNumber((prevState) => ({
        mobile: {
          ...prevState.number,
          value: value,
          helper: "არასწორი ნომერი",
          success: false,
          error: true,
        },
      }));
    }
  };

  return (
    <div className={style.personContainer}>
      <section className={style.personTitle}>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.85769 0.352185C9.0832 0.577756 9.20988 0.883657 9.20988 1.20262C9.20988 1.52157 9.0832 1.82747 8.85769 2.05305L2.90348 8.00726L8.85769 13.9615C9.0768 14.1883 9.19805 14.4922 9.19531 14.8076C9.19257 15.123 9.06606 15.4247 8.84304 15.6477C8.62002 15.8707 8.31832 15.9972 8.00293 16C7.68754 16.0027 7.3837 15.8815 7.15683 15.6623L0.352185 8.85769C0.126681 8.63212 0 8.32622 0 8.00726C0 7.6883 0.126681 7.3824 0.352185 7.15683L7.15683 0.352185C7.3824 0.126681 7.6883 0 8.00726 0C8.32622 0 8.63212 0.126681 8.85769 0.352185Z"
            fill="#2E2E2E"
          />
        </svg>
        <div className={style.personCont}>
          <h2>პირადი ინფო</h2>

          <div className={style.pageCount}>1/3</div>
        </div>
      </section>
      <section className={style.personInputs}>
        <div className={style.nameInput}>
          <Input
            label="სახელი"
            type="text"
            placeholder="ანზორ"
            name="name"
            required={true}
            helper={name.name.helper}
            id="name"
            onChange={nameValidation}
            error={name.name.error}
            success={name.name.success}
            value={name.name.value}
          />
          <Input
            label="გვარი"
            type="text"
            placeholder="მუმლაძე"
            name="name"
            required={true}
            helper={lastName.lastName.helper}
            id="familyName"
            onChange={lastNameValidation}
            error={lastName.lastName.error}
            success={lastName.lastName.success}
            value={lastName.lastName.value}
          />
        </div>
        <article className={style.uplaodContainer}>
          <p> პირადი ფოტოს ატვირთვა </p>
          <div className={style.uploadImg}>
            <input type="file" name="image" /> ატვირთვა
          </div>
        </article>

        <div className={style.textArea}>
          <p>ჩემ შესახებ(არასავალდებულო)</p>
          <textarea
            rows="4"
            cols="60"
            placeholder="ზოგადი ინფო შენ შესახებ"
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        <div className={style.mail}>
          <Input
            label="ელ.ფოსტა"
            type="email"
            placeholder="anzorr666@redberry.ge"
            name="email"
            required={true}
            helper={mail.mail.helper}
            id="email"
            onChange={mailValidation}
            error={mail.mail.error}
            success={mail.mail.success}
            value={mail.mail.value}
          />
        </div>
        <div className={style.number}>
          <Input
            label="მობილურის ნომერი"
            type="tel"
            placeholder="+995551123456"
            name="phone"
            required={true}
            helper={number.mobile.helper}
            id="mobile"
            onChange={mobileValidation}
            error={number.mobile.error}
            success={number.mobile.success}
            value={number.mobile.value}
          />
        </div>
      </section>

      <div className={style.nextBtn}>
        <button onClick={() => setPage("experience")}>შემდეგი</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
