import React from "react";

function Preferences({ data, onChange }) {
  return (
    <div>
      <h2>Preferences</h2>
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={data.newsletter}
          onChange={onChange}
        />
        Subscribe to newsletter
      </label>

      <br />

      <select name="theme" value={data.theme} onChange={onChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Preferences;
