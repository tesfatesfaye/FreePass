import {FC,ReactNode,useContext} from "react";
import ReactPortal from "./ReactPortal";
import { DashboardContext } from "../context/DashboardContext";
import IconComponent from "../components/icons/IconComponent";
interface ModalProps {
    children: ReactNode;
    
}

const Modal: FC<ModalProps> = ({ children }) => {
  const {updateCurrentModal}=useContext(DashboardContext)
    return (
      <ReactPortal wrapperId="portal">
        <div className="modal-overlay">
         
        </div>

        {children}
      </ReactPortal>
    );
};


     
export default Modal;