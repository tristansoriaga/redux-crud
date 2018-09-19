import React from "react";
import "./ViewList.css";

const ViewList = () => {
  return (
    <div className="App">
      <h1>View List</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Cost</th>
            <th />
            <th />
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>
              <button>View</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewList;
