import React from "react";
import "./ViewList.css";

const ViewList = () => {
  return (
    <div className="App">
      <h1>View List</h1>
      <hr />
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
        </tr>
      </table>
    </div>
  );
};

export default ViewList;
