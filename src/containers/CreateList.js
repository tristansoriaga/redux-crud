import React from "react";
import "./CreateList.css";
import { addIndividualProfile } from "../actions";
import history from "../components/history";

import store from "../store";

const CreateList = () => {
  const { user } = store;
  return (
    <div className="createlist">
      <h1>Create List</h1>
      <form onSubmit={handleAddClick.bind(null, "")}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" />

        <label htmlFor="status">Status</label>
        <textarea type="text" id="status" name="status" placeholder="Status" />

        <label htmlFor="photo">Photo</label>
        <input type="text" id="photo" name="photo" placeholder="Photo" />

        <input className="btnSave" type="submit" value="Save" />
      </form>
    </div>
  );
};

const handleAddClick = user => {
  console.log(user);
  store.dispatch(addIndividualProfile(user));
  history.push("/");
};

export default CreateList;
