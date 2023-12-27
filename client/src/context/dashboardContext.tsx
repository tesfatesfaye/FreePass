import React, { ReactNode, createContext, useState } from "react";

// Define the shape of the context
interface DashboardContextType {
  sideBarItemIsSelected: string;
  toggleSideBarItemSelection: (item: string) => void;
  updateSecretSelected: (id: string | null) => void;
  secretSelected: string | null;
  currentModal: string | null;
  updateCurrentModal: (name: string | null) => void;
}
interface Props {
  children: ReactNode;
}

const DashboardContext = createContext<DashboardContextType>({
  sideBarItemIsSelected: "All Secrets",
  toggleSideBarItemSelection: () => {},
  updateSecretSelected: () => {},
  secretSelected: null,
  currentModal: null,
  updateCurrentModal: () => {},
});

const DashboardContextProvider: React.FC<Props> = ({ children }) => {
  const [sideBarItemIsSelected, setSideBarItemIsSelected] =
    useState("All Secrets");

  const toggleSideBarItemSelection = (item: string) => {
    setSideBarItemIsSelected(item);
  };
 

const [currentModal, setCurrentModal] = useState<string | null>("Login");

  const updateCurrentModal = (name: string | null) => {
    setCurrentModal(name);
  };

 
  const [secretSelected, setSecretSelected] = useState<string | null>(null);

  const updateSecretSelected = (id: string | null) => {
    setSecretSelected(id);
  };

 


  return (
    <DashboardContext.Provider
      value={{
        sideBarItemIsSelected,
        toggleSideBarItemSelection,
        secretSelected,
        updateSecretSelected,
        currentModal,
        updateCurrentModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
