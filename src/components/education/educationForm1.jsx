import React, { useContext, useEffect } from "react";
import style from "./style.module.css";
import Input from "../input/Input";
import { formContext } from "../../store/formContext";
import axios from "axios";

const EducationForm = ({ id }) => {
  const { cvForm, setCvForm } = useContext(formContext);
  const form = JSON.parse(localStorage.getItem("form"));

  const instituteValidation = (e) => {
    const value = e.target.value;

    if (value.trim() === "" || value.trim().length < 2) {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            institute: {
              value: value,
              success: false,
              error: "მინიმუმ 2 სიმბოლო",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              institute: {
                value: value,
                success: false,
                error: "მინიმუმ 2 სიმბოლო",
              },
            };
          }),
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            institute: {
              value: value,
              success: true,
              error: false,
              helper: "მინიმუმ 2 სიმბოლო",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              institute: {
                value: value,
                success: true,
                error: false,
                helper: "მინიმუმ 2 სიმბოლო",
              },
            };
          }),
        })
      );
    }
  };

  const degreeValidate = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            degree: {
              value: value,
              success: true,
              error: false,
              helper: "სავალდებულო",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              degree: {
                value: value,
                success: true,
                error: false,
                helper: "სავალდებულო",
              },
            };
          }),
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            degree: {
              value: value,
              success: true,
              error: false,
              helper: "სავალდებულო",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              degree: {
                value: value,
                success: true,
                error: false,
                helper: "სავალდებულო",
              },
            };
          }),
        })
      );
    }
  };

  const dueDateValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            due_date: {
              value: value,
              success: false,
              error: "სავალდებულოა",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              due_date: {
                value: value,
                success: false,
                error: "სავალდებულოა",
              },
            };
          }),
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            due_date: {
              value: value,
              success: true,
              error: false,
              helper: "სავალდებულო",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              due_date: {
                value: value,
                success: true,
                error: false,
                helper: "სავალდებულო",
              },
            };
          }),
        })
      );
    }
  };

  const textAreaValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            description: {
              value: value,
              success: false,
              error: "სავალდებულოა",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              description: {
                value: value,
                success: false,
                error: "სავალდებულოა",
              },
            };
          }),
        })
      );
    } else {
      setCvForm((prevState) => ({
        ...prevState,
        educations: prevState.educations.map((education, index) => {
          if (id !== index) return education;

          return {
            ...education,
            description: {
              value: value,
              success: true,
              error: false,
              helper: "სავალდებულო",
            },
          };
        }),
      }));

      localStorage.setItem(
        "form",
        JSON.stringify({
          ...form,
          educations: form.educations.map((education, index) => {
            if (id !== index) return education;

            return {
              ...education,
              description: {
                value: value,
                success: true,
                error: false,
                helper: "სავალდებულო",
              },
            };
          }),
        })
      );
    }
  };

  return (
    <section className={style.eduInputs}>
      <div className={style.position}>
        <Input
          label="სასწავლებელი"
          type="text"
          placeholder="სასწავლებელი"
          name=""
          required={true}
          onChange={instituteValidation}
          helper={form.educations[id].institute.helper}
          error={form.educations[id].institute.error}
          success={form.educations[id].institute.success}
          value={form.educations[id].institute.value}
        />
      </div>

      <div className={style.dateInputs}>
        <div className={style.diplom}>
          <label for="diploms">ხარისხი</label>
          <select
            id="diploms"
            onChange={degreeValidate}
            value={form.educations[id].degree.value}
            className={` ${
              form.educations[id].degree.error ? style.errorArea : ""
            }  ${form.educations[id].degree.success ? style.successArea : ""}`}
          >
            <option value="" disabled selected hidden required>
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
              კოლეჯი(ხარისხის გარეშე)
            </option>
            <option value="სხვა">სხვა</option>
          </select>
          {form.educations[id].degree.success && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.successSvg}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0.75C4.44375 0.75 0.75 4.44375 0.75 9C0.75 13.5562 4.44375 17.25 9 17.25C13.5562 17.25 17.25 13.5562 17.25 9C17.25 4.44375 13.5562 0.75 9 0.75ZM12.576 7.605C12.6418 7.52973 12.692 7.44205 12.7234 7.34713C12.7549 7.2522 12.7671 7.15194 12.7592 7.05224C12.7513 6.95254 12.7236 6.85542 12.6777 6.7666C12.6317 6.67777 12.5685 6.59903 12.4917 6.53501C12.4148 6.47098 12.326 6.42297 12.2303 6.3938C12.1347 6.36462 12.0341 6.35487 11.9347 6.36512C11.8352 6.37537 11.7388 6.40541 11.6511 6.45347C11.5634 6.50154 11.4862 6.56666 11.424 6.645L8.199 10.5142L6.53025 8.84475C6.3888 8.70813 6.19935 8.63254 6.0027 8.63424C5.80605 8.63595 5.61794 8.71483 5.47889 8.85389C5.33983 8.99294 5.26095 9.18105 5.25924 9.3777C5.25754 9.57435 5.33313 9.7638 5.46975 9.90525L7.71975 12.1553C7.79344 12.2289 7.88167 12.2864 7.97881 12.324C8.07595 12.3617 8.17987 12.3787 8.28395 12.374C8.38803 12.3693 8.48998 12.3429 8.58331 12.2966C8.67663 12.2503 8.75929 12.185 8.826 12.105L12.576 7.605Z"
                fill="#98E37E"
              />
            </svg>
          )}
          <p
            className={
              form.educations[id].degree.error ? style.errorMsgColor : ""
            }
          >
            {form.educations[id].degree.error
              ? form.educations[id].degree.error
              : form.educations[id].degree.helper}
          </p>
        </div>
        <Input
          label="დამთავრების რიცხვი"
          type="date"
          placeholder=""
          name="date"
          required={true}
          onChange={dueDateValidation}
          helper={form.educations[id].due_date.helper}
          error={form.educations[id].due_date.error}
          success={form.educations[id].due_date.success}
          value={form.educations[id].due_date.value}
        />
      </div>

      <div className={style.textArea}>
        <p>აღწერა</p>
        <textarea
          rows="8"
          cols="80"
          placeholder="განათლების აღწერა"
          onChange={textAreaValidation}
          value={form.educations[id].description.value}
          className={`${
            form.educations[id].description.success ? style.successArea : ""
          } ${form.educations[id].description.error ? style.errorArea : ""}`}
        />
        <p
          className={
            form.educations[id].description.error ? style.textAreaError : ""
          }
        >
          {form.educations[id].description.error
            ? form.educations[id].description.error
            : form.educations[id].description.helper}
        </p>
      </div>
      <section className={style.brder}>
        <div></div>
      </section>
    </section>
  );
};

export default EducationForm;
