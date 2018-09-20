import React from "react";
import history from "../components/history";

import "./ViewList.css";
import _ from "lodash";

import store from "../store";
import { viewIndividualProfile } from "../actions";

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
            <tr key={val.user_id}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.status}</td>
              <td>
                <button onClick={handleUserClick.bind(null, val)}>View</button>
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

const handleUserClick = user => {
  console.log(user);
  store.dispatch(viewIndividualProfile(user));
  history.push("/view-profile");
};

export default ViewList;
