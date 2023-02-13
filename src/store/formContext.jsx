import React, { createContext, useState } from "react";

export const formContext = createContext();

export const defaultValue = {
  name: {
    value: "",
    helper: "მინიმუმ 2 ასო. ქართული ასოები",
    error: false,
    success: false,
  },
  lastName: {
    value: "",
    helper: "მინიმუმ 2 ასო. ქართული ასოები",
    error: false,
    success: false,
  },
  email: {
    value: "",
    helper: "უნდა მთავრდებოდეს @redberry.ge-ით",
    error: false,
    success: false,
  },
  phone_number: {
    value: "",
    helper: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
    error: false,
    success: false,
  },
  experiences: [
    {
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
      start_date: {
        value: "",
        error: false,
        success: false,
        helper: "სავალდებულო",
      },
      due_date: {
        value: "",
        error: false,
        success: false,
        helper: "სავალდებულო",
      },
      description: {
        value: "",
        error: false,
        success: false,
        helper: "სავალდებულო",
      },
    },
  ],
  educations: [
    {
      institute: {
        value: "",
        helper: "მინიმუმ 2 სიმბოლო",
        error: false,
        success: false,
      },
      degree: {
        value: "",
        error: false,
        success: false,
        helper: "სავალდებულო",
      },
      due_date: {
        value: "",
        error: false,
        success: false,
        helper: "სავალდებულო",
      },
      description: {
        value: "",
        error: false,
        success: false,
        helper: "სავალდებულო",
      },
    },
  ],
  image: {
    value: "",
    error: "",
    success: false,
    base: "",
  },
  about_me: "",
};

export const FormProvider = (props) => {
  const [cvForm, setCvForm] = useState(defaultValue);
  const [page, setPage] = useState("person");

  return (
    <formContext.Provider value={{ cvForm, setCvForm, page, setPage }}>
      {props.children}
    </formContext.Provider>
  );
};
