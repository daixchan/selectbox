import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  const listener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", listener);
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};

export default useClickOutside;