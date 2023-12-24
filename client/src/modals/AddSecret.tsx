import { FC, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Modal from "./Modal";
const AddSecret: FC = () => {
  const { currentModal } = useContext(DashboardContext);
  if (currentModal !== "AddSecret") return null;
  return (
    <Modal>
      <div className="modal-container justify-center">
        <div>Hello</div>
      </div>
    </Modal>
  );
};
export default AddSecret;
