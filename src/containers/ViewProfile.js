import React from "react";
import "./ViewProfile.css";
import store from "../store";

const ViewProfile = () => {
  const { user } = store.getState();
  const { name, email, status, profile_pic } = user;

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
      <img src={profile_pic} alt={name} />
    </div>
  );
};

export default ViewProfile;
