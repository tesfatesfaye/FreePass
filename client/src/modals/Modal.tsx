import { FC, ReactNode,useContext } from "react";
import ReactPortal from "./ReactPortal";
import { DashboardContext } from "../context/DashboardContext";
interface ModalProps {
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {

  const { currentModal, updateCurrentModal } = useContext(DashboardContext);
  return (
    <ReactPortal wrapperId="portal">
      <div className="modal-overlay"></div>
      <div
        className="flex flex-col fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        h-[95%]   bg-p-dark rounded-md shadow-2xl w-[35%]"
      >
        <div className="flex items-center h-[6%] justify-between px-4 rounded-t-md bg-s-dark">
          <h1 className="text-white text-lg  ml-auto mr-auto">Add Secret</h1>
          <button onClick={()=>updateCurrentModal(null)}
          className="text-white flex items-center text-lg font-bold mr-2">
            X
          </button>
        </div>
      </div>

      {children}
    </ReactPortal>
  );
};

export default Modal;
