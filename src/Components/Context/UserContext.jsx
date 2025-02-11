import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();
export default function UserContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setUserToken(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </UserContext.Provider>
  );
}
