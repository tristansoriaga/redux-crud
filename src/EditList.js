import React from "react";
import "./EditList.css";

const EditList = () => {
  return (
    <div className="editlist">
      <h1>Edit List</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" />

        <label htmlFor="status">Status</label>
        <input type="text" id="status" name="status" placeholder="Status" />

        <label htmlFor="photo">Photo</label>
        <input type="text" id="photo" name="photo" placeholder="Photo" />

        <input className="btnSave" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditList;
