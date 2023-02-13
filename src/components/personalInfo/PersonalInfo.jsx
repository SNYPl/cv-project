import React, { useEffect } from "react";
import style from "./style.module.css";
import Input from "../input/Input";
import { useContext } from "react";
import { formContext, defaultValue } from "../../store/formContext";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const { cvForm, setCvForm, setPage, page } = useContext(formContext);

  const form = JSON.parse(localStorage.getItem("form"));

  const pageLocal = JSON.parse(localStorage.getItem("page"));
  let navigate = useNavigate();

  useEffect(() => {
    setCvForm({ ...form });
  }, []);

  useEffect(() => {
    setPage({ ...pageLocal });
  }, []);

  const nameValidation = (e) => {
    const value = e.target.value;

    if (value.trim() === "" || value.trim().length < 2) {
      setCvForm((prevState) => ({
        ...prevState,
        name: {
          ...prevState.name,
          value: value,
          success: false,
          error: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          name: {
            ...form.name,
            value: value,
            success: false,
            error: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
          },
        })
      );
    } else if (!/^[ა-ჰ]+$/.test(value)) {
      setCvForm((prevState) => ({
        ...prevState,
        name: {
          ...prevState.name,
          value: value,
          success: false,
          error: "გამოიყენე ქართული ასოები",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          name: {
            ...form.name,
            value: value,
            success: false,
            error: "გამოიყენე ქართული ასოები",
          },
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        name: { ...prevState.name, value: value, success: true, error: false },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          name: { ...form.name, value: value, success: true, error: false },
        })
      );
    }
  };

  const lastNameValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "" || value.trim().length < 2) {
      setCvForm((prevState) => ({
        ...prevState,
        lastName: {
          ...prevState.lastName,
          value: value,
          success: false,
          error: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          lastName: {
            ...form.lastName,
            value: value,
            success: false,
            error: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
          },
        })
      );
    } else if (!/^[ა-ჰ]+$/.test(value)) {
      setCvForm((prevState) => ({
        ...prevState,
        lastName: {
          ...prevState.lastName,
          value: value,
          success: false,
          error: "გამოიყენე ქართული ასოები",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          lastName: {
            ...form.lastName,
            value: value,
            success: false,
            error: "გამოიყენე ქართული ასოები",
          },
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        lastName: {
          ...prevState.lastName,
          value: value,
          success: true,
          error: false,
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          lastName: {
            ...form.lastName,
            value: value,
            success: true,
            error: false,
          },
        })
      );
    }
  };

  const mailValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setCvForm((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          value: value,
          success: false,
          error: "შეიყვანეთ მეილი",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          email: {
            ...form.email,
            value: value,
            success: false,
            error: "შეიყვანეთ მეილი",
          },
        })
      );
    } else if (!/^[\w.+-]+@redberry\.ge$/.test(value)) {
      setCvForm((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          value: value,
          success: false,
          error: "არასწორი მეილი",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          email: {
            ...form.email,
            value: value,
            success: false,
            error: "არასწორი მეილი",
          },
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          value: value,
          success: true,
          error: false,
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          email: {
            ...form.email,
            value: value,
            success: true,
            error: false,
          },
        })
      );
    }
  };

  const mobileValidation = (e) => {
    const regex = /^[0-9 ()+]+$/;
    let value = e.target.value;

    if (value.length === 0) {
      setCvForm((prevState) => ({
        ...prevState,
        phone_number: { ...prevState.phone_number, value: "" },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          phone_number: { ...form.phone_number, value: "" },
        })
      );
    }

    if (value === "" || !regex.test(value)) {
      return;
    }

    setCvForm((prevState) => ({
      ...prevState,
      phone_number: { ...prevState.phone_number, value: value },
    }));
    localStorage.setItem(
      "form",
      JSON.stringify({
        ...form,
        phone_number: { ...form.phone_number, value: "" },
      })
    );

    if (
      value.trim().slice(0, 4).toString() === "+995" &&
      value.trim().length === 13
    ) {
      setCvForm((prevState) => ({
        ...prevState,
        phone_number: {
          ...prevState.phone_number,
          value: value,
          success: true,
          error: false,
          helper: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          phone_number: {
            ...form.phone_number,
            value: value,
            success: true,
            error: false,
            helper: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
          },
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        phone_number: {
          ...prevState.phone_number,
          value: value,
          helper: "",
          success: false,
          error: "არასწორი ნომერი",
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          phone_number: {
            ...form.phone_number,
            value: value,
            helper: "",
            success: false,
            error: "არასწორი ნომერი",
          },
        })
      );
    }
  };

  const imageUpload = (e) => {
    if (
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpeg"
    ) {
      setCvForm((prevState) => ({
        ...prevState,
        image: {
          ...prevState.image,
          value: "",
          error: "მხოლოდ PNG ან JPG ფორმატი",
          success: false,
        },
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          image: {
            ...form.image,
            value: "",
            error: "მხოლოდ PNG ან JPG ფორმატი",
            success: false,
          },
        })
      );

      return;
    }
    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);
    fr.addEventListener("load", () => {
      setCvForm((prevState) => ({
        ...prevState,
        image: {
          ...prevState.image,
          value: URL.createObjectURL(e.target.files[0]),
          error: false,
          success: true,
          base: fr.result,
        },
      }));
      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          image: {
            ...form.image,
            value: URL.createObjectURL(e.target.files[0]),
            error: false,
            success: true,
            base: fr.result,
          },
        })
      );
    });

    setCvForm((prevState) => ({
      ...prevState,
      image: {
        ...prevState.image,
        value: URL.createObjectURL(e.target.files[0]),
        error: false,
        success: true,
      },
    }));
    localStorage.setItem(
      "form",
      JSON.stringify({
        ...form,
        image: {
          ...form.image,
          value: URL.createObjectURL(e.target.files[0]),
          error: false,
          success: true,
        },
      })
    );
  };

  const refreshPage = () => {
    window.localStorage.removeItem("form");
    setCvForm(defaultValue);
    let path = `/`;
    navigate(path);
  };

  return (
    <section className={style.personContainer}>
      <section className={style.personTitle}>
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
            helper={form.name.helper}
            id="name"
            onChange={nameValidation}
            error={form.name.error}
            success={form.name.success}
            value={form.name.value}
          />
          <Input
            label="გვარი"
            type="text"
            placeholder="მუმლაძე"
            name="familyName"
            required={true}
            helper={form.lastName.helper}
            id="familyName"
            onChange={lastNameValidation}
            error={form.lastName.error}
            success={form.lastName.success}
            value={form.lastName.value}
          />
        </div>
        <article className={style.uplaodContainer}>
          <p> პირადი ფოტოს ატვირთვა </p>
          <div className={style.uploadImg}>
            <input type="file" name="image" onChange={imageUpload} required />
            ატვირთვა
          </div>
          <p className={style.uploadError}>{form.image.error}</p>
        </article>

        <div className={style.textArea}>
          <p>ჩემ შესახებ(არასავალდებულო)</p>
          <textarea
            rows="4"
            cols="60"
            value={form.about_me}
            placeholder="ზოგადი ინფო შენ შესახებ"
            onChange={(e) => {
              setCvForm((prevState) => ({
                ...prevState,
                about_me: e.target.value,
              }));

              localStorage.setItem(
                "form",
                JSON.stringify({
                  ...form,
                  about_me: e.target.value,
                })
              );
            }}
          />
        </div>
        <div className={style.mail}>
          <Input
            label="ელ.ფოსტა"
            type="email"
            placeholder="anzorr666@redberry.ge"
            name="email"
            required={true}
            helper={form.email.helper}
            id="email"
            onChange={mailValidation}
            error={form.email.error}
            success={form.email.success}
            value={form.email.value}
          />
        </div>
        <div className={style.number}>
          <Input
            label="მობილურის ნომერი"
            type="tel"
            placeholder="+995551123456"
            name="phone"
            required={true}
            helper={form.phone_number.helper}
            id="mobile"
            onChange={mobileValidation}
            error={form.phone_number.error}
            success={form.phone_number.success}
            value={form.phone_number.value}
          />
        </div>
      </section>

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
          className={
            form.phone_number.success &&
            form.email.success &&
            form.image.success &&
            form.lastName.success &&
            form.name.success
              ? ""
              : style.disableBtn
          }
        >
          შემდეგი
        </button>
      </div>
    </section>
  );
};

export default PersonalInfo;
