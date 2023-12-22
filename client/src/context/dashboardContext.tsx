import React, { ReactNode, createContext, useEffect, useState } from "react";

// Define the shape of the context
interface DashboardContextType {
  sideBarItemIsSelected: string;
  toggleSideBarItemSelection: (item: string) => void;
  secretParentHeight:number
}
interface Props {
  children: ReactNode;
}

const DashboardContext = createContext<DashboardContextType>({
  sideBarItemIsSelected: "All Secrets",
  toggleSideBarItemSelection: () => {},
  secretParentHeight:window.innerHeight - 48
});

const DashboardContextProvider: React.FC<Props> = ({ children }) => {
  const [sideBarItemIsSelected, setSideBarItemIsSelected] =
    useState("All Secrets");

  const toggleSideBarItemSelection = (item: string) => {
    setSideBarItemIsSelected(item);
  };
  const [secretParentHeight, setSecretParentHeight] = useState(
    window.innerHeight - 48
  );
  useEffect(() => {
    const handleResize = () => {
      setSecretParentHeight(window.innerHeight - 48);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <DashboardContext.Provider
      value={{ sideBarItemIsSelected, toggleSideBarItemSelection, secretParentHeight }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
