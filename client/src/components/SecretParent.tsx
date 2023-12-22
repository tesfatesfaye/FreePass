import { FC, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
const SecretParent: FC = () => {
  const { secretParentHeight } = useContext(DashboardContext);
  return (
    <div
     
      className={`flex w-[500px] max-h-[${secretParentHeight}px] bg-p-dark text-white  border-l border-l-t-dark  overflow-y-auto`}
    ></div>
  );
};

export default SecretParent;
