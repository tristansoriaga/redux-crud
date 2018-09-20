import React from "react";
import "./EditList.css";
import store from "../store";

const EditList = () => {
  const { user } = store.getState();
  const { name, email, status, profile_pic } = user;
  return (
    <div className="editlist">
      <h1>Edit List</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
        />

        <label htmlFor="status">Status</label>
        <textarea
          type="text"
          id="status"
          name="status"
          placeholder="Status"
          value={status}
        />

        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          id="photo"
          name="photo"
          placeholder="Photo"
          value={profile_pic}
        />

        <input className="btnSave" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditList;
