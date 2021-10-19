import { useState, useEffect } from "react";

const useWindow = () => {
  //TODO: Manage screen-size state
  const [size, setSize] = useState<number>(1000);

  //TODO: Monitor the screen size to enable image responsiveness
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", (e) => {
        setSize(window.innerWidth);
      });
    };
  });

  return {size};
};

export default useWindow;
