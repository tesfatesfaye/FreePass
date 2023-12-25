import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import Modal from "../../../modals/Modal";

const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);

  if (currentModal !== "Login") return null;

  return (
    <>
      <Modal>
        <h1>login</h1>
      </Modal>
    </>
  );
};

export default LoginSecretComponent;
