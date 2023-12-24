import { FC } from "react";
import SecretParent from "./secrets/Secrets.tsx";
import SideBar from "./sidebar/SideBar.tsx";
import SelectedSecret from "./secrets/selectedSecret/SelectedSecret.tsx";
import AddSecret from "../modals/AddSecret.tsx";
const DashBoard: FC = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <SecretParent />
      <SelectedSecret />
      <AddSecret/>
    </div>
  );
};

export default DashBoard;
