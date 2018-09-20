import React from "react";
import "./ViewProfile.css";
import store from "../store";

const ViewProfile = ({ state = store.getState() }) => {
  const { user } = state;
  const { name, email, status, profile_pic } = user;
  console.log(user);
  return (
    <div className="viewprofile">
      <h3>
        <b>Name:</b>
      </h3>
      <p>{name}</p>
      <h3>
        <b>Email:</b>
      </h3>
      <p>{email}</p>
      <h3>
        <b>Status:</b>
      </h3>
      <p>{status}</p>
      <img src={profile_pic} />
    </div>
  );
};

export default ViewProfile;
