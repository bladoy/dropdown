import { useEffect } from "react";

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch(() => window.alert("There was an error, please refresh"));
};

const useOnOutsideClick = (ref, outsideClickHandler) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && event.target.className.includes("outside-container")) {
        outsideClickHandler();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
};

export { fetchData, useOnOutsideClick };
