"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
 


   const key = Cookies.get("token")
   console.log(key)
  

  return (
    <UserContext.Provider value={{ token }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };