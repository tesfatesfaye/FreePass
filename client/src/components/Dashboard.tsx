import { FC } from "react";
import SecretParent from "./secrets/Secrets.tsx";
import SideBar from "./sidebar/SideBar.tsx";
const DashBoard: FC = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <SecretParent />
    </div>
  );
};

export default DashBoard;
