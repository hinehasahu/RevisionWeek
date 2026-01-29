import React, { useEffect, useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!text) return;
    setStatus(false);
    let timer = setTimeout(() => {
      setStatus(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [text]);
  return (
    <div>
      <p style={{ color: status ? "green" : "orange" }}>
        {text.length > 0 ? (status ? "Saved" : "Saving...") : ""}
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}></textarea>
    </div>
  );
}

export default Form;
