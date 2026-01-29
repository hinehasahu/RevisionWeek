import React from "react";

function PersonalInfo({ data, onChange }) {
  return (
    <div>
        <h2>Personal Info</h2>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={onChange}
        placeholder="enter name"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={onChange}
        placeholder="enter email"
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={onChange}
        placeholder="enter password"
      />
      <input
        type="tel"
        name="telephone"
        value={data.telephone}
        onChange={onChange}
        placeholder="enter number"
      />
      <input
        type="text"
        name="city"
        value={data.city}
        onChange={onChange}
        placeholder="enter city"
      />
    </div>
  );
}

export default PersonalInfo;
