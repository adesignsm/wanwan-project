import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

// OPEN OR CLOSE SIDE MENU
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  
  const openMenu = () => {
    setIsMenuOpen(true);
    setIsHeaderOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


// HIDE OR UNHIDE HEADER

const closeHeader = () => {
  setIsHeaderOpen(false);
};

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        isHeaderOpen,
        closeHeader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
