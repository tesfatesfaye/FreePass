import { FC } from "react";
import SecretParent from "./secrets/Secrets.tsx";
import SideBar from "./sidebar/SideBar.tsx";
import SelectedSecret from "./secrets/selectedSecret/SelectedSecret.tsx";
const DashBoard: FC = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <SecretParent />
      <SelectedSecret />
    
    </div>
  );
};

export default DashBoard;
