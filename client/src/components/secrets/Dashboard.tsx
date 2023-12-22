import { FC } from "react";
import SideBar from "../sidebar/SideBar.tsx";
import SecretParent from "./Secrets.tsx";
const DashBoard: FC = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <SecretParent />
    </div>
  );
};

export default DashBoard;
