import React, { useState } from "react";

function Main() {
  const [password, setPassword] = useState("");
  let hasminlength = password.length >= 8;
  let hasUpperCase = /[A-Z]/.test(password);
  let hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  let hasNumber = /[0-9]/.test(password);

  const checkPass = [hasminlength, hasUpperCase, hasNumber, hasSpecialChar];
  let count = checkPass.filter(Boolean);

  let borderColor = "red";
  if (count.length === 2 || count.length === 3) borderColor = "yellow";
  if (count.length === 4) borderColor = "green";
  return (
    <div>
      <input
        style={{
          border: `4px solid ${borderColor}`,
        }}
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
      />
      <ul>
        <li>{hasminlength ? "✓" : "✗"} Minimum 8 characters</li>
        <li>{hasUpperCase ? "✓" : "✗"} Uppercase letter</li>
        <li>{hasNumber ? "✓" : "✗"} Number</li>
        <li>{hasSpecialChar ? "✓" : "✗"} Special character</li>
      </ul>
    </div>
  );
}

export default Main;
