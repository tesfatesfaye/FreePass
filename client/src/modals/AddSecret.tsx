import { FC, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import ReactPortal from "./ReactPortal";

const AddSecret: FC = () => {
  const { currentModal } = useContext(DashboardContext);
  if (currentModal !== "AddSecret") return null;
  return (
    <ReactPortal wrapperId="portal">
      <div className="modal-overlay"></div>
      <div className="flex fixed top-0 left-0 right-0 bottom-0 z-50 text-white">
       
      </div>
    </ReactPortal>
  );
};
export default AddSecret;
