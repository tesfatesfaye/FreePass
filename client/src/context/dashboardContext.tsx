import React, { useState, createContext,ReactNode } from "react";

// Define the shape of the context
interface DashboardContextType {
  sideBarItemIsSelected: string;
  toggleSideBarItemSelection: (item: string) => void;
}
interface Props {
    children: ReactNode;
}

const DashboardContext = createContext<DashboardContextType>({
  sideBarItemIsSelected: "All Secrets",
  toggleSideBarItemSelection: () => {},
});

const DashboardContextProvider: React.FC <Props>= ({ children }) => {
  const [sideBarItemIsSelected, setSideBarItemIsSelected] =
    useState("All Secrets");

  const toggleSideBarItemSelection = (item: string) => {
    setSideBarItemIsSelected(item);
  };

  return (
    <DashboardContext.Provider
      value={{ sideBarItemIsSelected, toggleSideBarItemSelection }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
