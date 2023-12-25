import { FC, ReactNode } from "react";
import ReactPortal from "./ReactPortal";
interface ModalProps {
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <ReactPortal wrapperId="portal">
      <div className="modal-overlay"></div>
      <div
        className="flex flex-col fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        h-[90%] bg-s-dark rounded-xl shadow-2xl w-[90%]"
      >
        <div className="flex items-center h-[10%] justify-between px-4 bg-p-dark">
          <h1 className="text-white text-2xl font-bold ml-auto mr-auto">Add Secret</h1>
          <button className="text-white text-2xl font-bold mr-2">X</button>

        </div>
      </div>

      {children}
    </ReactPortal>
  );
};

export default Modal;
