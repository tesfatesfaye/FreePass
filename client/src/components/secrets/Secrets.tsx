import { FC, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import SecretItem from "./SecretItem";
const SecretParent: FC = () => {
  const { secretParentHeight } = useContext(DashboardContext);
  const secrets = Array.from({ length: 10 }, (j, i) => (
    <SecretItem key={String(i)} id={String(i)} subtype="Email" type="Lock" />
  ));
  return (
    <div
      style={{ maxHeight: secretParentHeight }}
      className={`flex flex-col w-[22%] px] bg-p-dark text-white  border-l border-l-t-dark  overflow-y-auto  `}
    >
      {secrets}
    </div>
  );
};

export default SecretParent;
