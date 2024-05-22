import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Loading() {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((currentCounter) => --currentCounter);
    }, 1000);

    counter === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [counter]);

  return <div>Wait {counter}</div>;
}
