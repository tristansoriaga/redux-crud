import React from "react";
import "./ViewList.css";
import _ from "lodash";

import store from "../store";

const ViewList = () => {
  const { contacts } = store.getState();
  const contact = _.values(contacts);

  return (
    <div className="viewlist">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th />
            <th />
          </tr>
          {contact.map(val => (
            <tr>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.status}</td>
              <td>
                <button>View</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewList;
