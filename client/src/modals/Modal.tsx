import { FC, ReactNode, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import ReactPortal from "./ReactPortal";
import Icon from "../components/icons/IconComponent";
interface ModalProps {
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  const { currentModal, updateCurrentModal } = useContext(DashboardContext);
  if (!currentModal) return null;
  return (
    <ReactPortal wrapperId="portal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div
          className="flex flex-col relative
        h-[95%] bg-p-dark rounded-md shadow-2xl w-[30%] max-w-[700px] "
        >
          <header className="flex items-center h-[4rem] justify-between px-4 rounded-t-md bg-s-dark">
            <Icon type={currentModal} size={45}className="text-white text-lg  ml-auto mr-auto"/>
            <button onClick={() => updateCurrentModal(null)}>
              <Icon
                className="text-white flex items-center text-lg font-bold mr-2"
                type="Close"
                size={25}
              />
            </button>
          </header>
          {children}
          <footer className="flex items-center h-[3rem] mt-auto justify-between px-4 
          rounded-b-md bg-s-dark">
            <button
              className="text-white 
               flex w-[5rem] items-center justify-center h-[30px]
             bg-p-dark ml-auto mr-2 rounded"
            >
              Save
            </button>
          </footer>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
