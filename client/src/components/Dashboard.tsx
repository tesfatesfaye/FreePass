import { FC } from "react";
import SecretParent from "./secrets/Secrets.tsx";
import SideBar from "./sidebar/SideBar.tsx";
import SelectedSecret from "./secrets/selectedSecret/SelectedSecret.tsx";
import LoginSecretComponent from "./secrets/selectedSecret/Login.tsx";
import Payment from "./secrets/selectedSecret/Payment.tsx";
const DashBoard: FC = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <SecretParent />
      <SelectedSecret />
      <LoginSecretComponent />
      <Payment />
    </div>
  );
};

export default DashBoard;
