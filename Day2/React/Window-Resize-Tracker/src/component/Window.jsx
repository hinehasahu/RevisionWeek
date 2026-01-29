import React, { useEffect, useState } from "react";

function Window() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(size.width,size.height);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDeviceType = () => {
    if (size.width < 768) return "Mobile";
    if (size.width >= 768 && size.width <= 1024) return "Tablet";
    return "Desktop";
  };
  return (
    <div>
      <h1>
        Current Dimension: {size.width} X {size.height}
      </h1>
      <h1>Dimension: {getDeviceType()}</h1>
    </div>
  );
}

export default Window;
