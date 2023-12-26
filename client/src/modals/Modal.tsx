import { FC, ReactNode, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import ReactPortal from "./ReactPortal";
interface ModalProps {
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  const { currentModal, updateCurrentModal } = useContext(DashboardContext);
  return (
    <ReactPortal wrapperId="portal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div
          className="flex flex-col relative
        h-[95%]   bg-p-dark rounded-md shadow-2xl w-[30%]  "
        >
          <header className="flex items-center h-[4rem] justify-between px-4 rounded-t-md bg-s-dark ">
            <h1 className="text-white text-lg  ml-auto mr-auto">Add Secret</h1>
            <button
              onClick={() => updateCurrentModal(null)}
              className="text-white flex items-center text-lg font-bold mr-2"
            >
              X
            </button>
          </header>
          {children}
          <footer className="flex items-center h-[3rem] mt-auto justify-between px-4 rounded-b-md bg-s-dark"></footer>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
