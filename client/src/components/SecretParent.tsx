import { FC, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Secrets from "./Secrets";
const SecretParent: FC = () => {
  const { secretParentHeight } = useContext(DashboardContext);
  return (
    <div
      className={`flex flex-col w-[500px] max-h-[${secretParentHeight}px] bg-p-dark text-white  border-l border-l-t-dark  overflow-y-auto  `}
    >
      <Secrets />
      <Secrets />
    </div>
  );
};

export default SecretParent;
