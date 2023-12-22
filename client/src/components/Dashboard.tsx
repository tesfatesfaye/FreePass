
import SideBar from "./SideBar.tsx";
import SecretParent from "./Secrets.tsx";
import { FC } from "react";
const DashBoard:FC = () => {
  return (
    <div className="flex h-full w-full">
    
      <SideBar />
      <SecretParent/>
    </div>
  );
};

export default DashBoard;
