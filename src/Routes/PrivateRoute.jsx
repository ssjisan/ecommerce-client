import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

export default function PrivateRoute() {
  //eslint-disable-next-line
  const { auth, setAuth } = useContext(DataContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      //eslint-disable-next-line
      const { data } = await axios.get("/auth-check");
      if (auth?.token) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  // useEffect(() => {
  //   if (auth?.token) {
  //     setIsUserLoggedIn(true);
  //   } else {
  //     setIsUserLoggedIn(false);
  //   }
  // }, [auth?.token]);

  return isUserLoggedIn ? <Outlet /> : <Loading />;
}
