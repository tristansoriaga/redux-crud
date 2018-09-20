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
        <input type="text" id="status" name="status" placeholder="Status" />

        <label htmlFor="cost">Cost</label>
        <select id="cost" name="cost">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default CreateList;
