import React from "react";
import "./EditList.css";

const EditList = () => {
  return (
    <div className="App">
      <h1>Edit List</h1>
      <hr />
      <form>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="First Name"
        />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Last Name" />

        <label for="cost">Cost</label>
        <select id="cost" name="cost">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>

        <input type="submit" value="Edit" />
      </form>
    </div>
  );
};

export default EditList;
