import {FC,ReactNode} from "react";
import ReactPortal from "./ReactPortal";
interface ModalProps {
    children: ReactNode;
    
}
const Modal: FC<ModalProps> = ({ children }) => {

    return (
      <ReactPortal wrapperId="portal">
        <div className="modal-overlay">
         
        </div>

        {children}
      </ReactPortal>
    );
};


     
export default Modal;