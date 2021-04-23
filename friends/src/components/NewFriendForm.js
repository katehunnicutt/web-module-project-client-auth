import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../helpers/AxiosWithAuth";

const initialValues = {
  name: "",
  age: "",
  email: "",
};


const NewFriendForm = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChanges = e => {
      setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
      axiosWithAuth()
      .post("/api/friends", formValues)
      .then(res => console.log(res))
      .catch(err => console.log({err}))
  }
  return (
    <div>
      <h2>Add a Friend</h2>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="name"
        value={formValues.name}
        onChange={handleChanges}
      />
      <label>Age</label>
      <input
        id="age"
        name="age"
        type="text"
        placeholder="age"
        value={formValues.age}
        onChange={handleChanges}
      />

      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email@email.com"
        value={formValues.email}
        onChange={handleChanges}
      />
      </form>
    </div>
  );
};

export default NewFriendForm;
