"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "./store";
import { onLogin, onLogout } from "./features/auth-slice";
import moment from "moment";
import { useRouter } from "next/navigation";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    // fetch the user data from the local storage and set it in the redux store
    const userJSON = localStorage.getItem("user");
    const tokenJSON = localStorage.getItem("token");
    const expiresAtJSON = localStorage.getItem("expiresAt");
    if (userJSON && tokenJSON && expiresAtJSON) {
      const user = JSON.parse(userJSON);
      const token = JSON.parse(tokenJSON);
      const expiresAt = JSON.parse(expiresAtJSON);
      //convert it to the date object
      const expiresAtDate = moment(expiresAt);
      //we need to check if the token is expired or not
      if (expiresAtDate.isBefore(moment())) {
        //token is expired
        dispatch(onLogout());
        router.push("/");
        return;
      }
      dispatch(onLogin({ user, token, expiresAt }));
    } else {
      dispatch(onLogout());
      router.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;