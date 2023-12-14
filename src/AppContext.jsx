import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const Bar = ({ children }) => {
  const [num, setNum] = useState(0);



  const handleNum = (sonic) => {
    setNum(sonic);
  };

  return (
  <AppContext.Provider value={{
    num,
    setNum,
    handleNum,
  }}>
    {children}
    </AppContext.Provider>
  )
  };
