import React from "react";
import "./CreateList.css";

const CreateList = () => {
  return (
    <div className="createlist">
      <h1>Create List</h1>
      <form>
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

export default CreateList;
