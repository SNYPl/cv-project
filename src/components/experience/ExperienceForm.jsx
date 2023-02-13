import React, { useContext, useEffect } from "react";
import style from "./style.module.css";
import Input from "../input/Input";
import { formContext } from "../../store/formContext";

const ExperienceForm = ({ id }) => {
  const { cvForm, setCvForm } = useContext(formContext);
  const form = JSON.parse(localStorage.getItem("form"));

  const positionValidation = (e) => {
    const value = e.target.value;

    if (value.trim() === "" || value.trim().length < 2) {
      setCvForm((prevState) => ({
        ...prevState,
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
            position: {
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
              position: {
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
            position: {
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
              position: {
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

  const employValidation = (e) => {
    const value = e.target.value;

    if (value.trim() === "" || value.trim().length < 2) {
      setCvForm((prevState) => ({
        ...prevState,
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
            employer: {
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
              employer: {
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
            employer: {
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
              employer: {
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

  const startDateValidation = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setCvForm((prevState) => ({
        ...prevState,
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
            start_date: {
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
              start_date: {
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
            start_date: {
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
              start_date: {
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
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
        experiences: prevState.experiences.map((experience, index) => {
          if (id !== index) return experience;

          return {
            ...experience,
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
          experiences: form.experiences.map((experience, index) => {
            if (id !== index) return experience;

            return {
              ...experience,
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
          label="თანამდებობდა"
          type="text"
          placeholder="დეველოპერი,დიზაინერი და ა.შ"
          name="position"
          required={true}
          onChange={positionValidation}
          helper={form.experiences[id].position.helper}
          error={form.experiences[id].position.error}
          success={form.experiences[id].position.success}
          value={form.experiences[id].position.value}
        />
      </div>
      <div className={style.employer}>
        <Input
          label="დამსაქმებელი"
          type="text"
          placeholder="დამსაქმებელი"
          name=""
          required={true}
          onChange={employValidation}
          helper={form.experiences[id].employer.helper}
          error={form.experiences[id].employer.error}
          success={form.experiences[id].employer.success}
          value={form.experiences[id].employer.value}
        />
      </div>
      <div className={style.dateInputs}>
        <Input
          label="დაწყების რიცხვი"
          type="date"
          placeholder=""
          name="date"
          required={true}
          helper={form.experiences[id].start_date.helper}
          onChange={startDateValidation}
          error={form.experiences[id].start_date.error}
          success={form.experiences[id].start_date.success}
          value={form.experiences[id].start_date.value}
        />
        <Input
          label="დამთავრების რიცხვი"
          type="date"
          placeholder=""
          name="date"
          required={true}
          helper={form.experiences[id].due_date.helper}
          onChange={dueDateValidation}
          error={form.experiences[id].due_date.error}
          success={form.experiences[id].due_date.success}
          value={form.experiences[id].due_date.value}
        />
      </div>

      <div className={style.textArea}>
        <p>აღწერა</p>
        <textarea
          rows="8"
          cols="80"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          onChange={textAreaValidation}
          value={form.experiences[id].description.value}
          className={`${
            form.experiences[id].description.success ? style.successArea : ""
          } ${form.experiences[id].description.error ? style.errorArea : ""}`}
        />
        <p
          className={
            form.experiences[id].description.error ? style.textAreaError : ""
          }
        >
          {form.experiences[id].description.error
            ? form.experiences[id].description.error
            : form.experiences[id].description.helper}
        </p>
      </div>
      <section className={style.brder}>
        <div></div>
      </section>
    </section>
  );
};

export default ExperienceForm;
