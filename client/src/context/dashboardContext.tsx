import React, { ReactNode, createContext, useEffect, useState } from "react";

// Define the shape of the context
interface DashboardContextType {
  sideBarItemIsSelected: string;
  toggleSideBarItemSelection: (item: string) => void;
  secretParentHeight: number;
  hoveredSecretItemId: string | null;
  updateHoveredSecretItemId: (id: string | null) => void;
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
  secretParentHeight: window.innerHeight - 48,
  hoveredSecretItemId: null,
  updateHoveredSecretItemId: () => {},
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
  const [secretParentHeight, setSecretParentHeight] = useState(
    window.innerHeight - 48
  );

  const [hoveredSecretItemId, setHoveredSecretItemId] = useState<string | null>(
    null
  );

const [currentModal, setCurrentModal] = useState<string | null>(null);

  const updateCurrentModal = (name: string | null) => {
    setCurrentModal(name);
  };

  const updateHoveredSecretItemId = (id: string | null) => {
    setHoveredSecretItemId(id);
  };
  const [secretSelected, setSecretSelected] = useState<string | null>(null);

  const updateSecretSelected = (id: string | null) => {
    setSecretSelected(id);
  };

 
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
      value={{
        sideBarItemIsSelected,
        toggleSideBarItemSelection,
        secretParentHeight,
        hoveredSecretItemId,
        updateHoveredSecretItemId,
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
