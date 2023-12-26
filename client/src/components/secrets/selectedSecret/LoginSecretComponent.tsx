import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import Modal from "../../../modals/Modal";
import IconComponent from "../../icons/IconComponent";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);

  if (currentModal !== "Login") return null;

  return (
    <Modal>
      <div className=" flex flex-col w-auto ml-8 box-border pt-5 mr-3">
        <div className="flex gap-1 max-w-[100%] mb-2 items-center box-border">
          <IconComponent type="Login" color="Orange" size={50} />
          <div className=" pl-3 flex box-border h-[75%] items-center text-white text-xl font-bold bg-t-dark bg-opacity-50 rounded flex-grow">
            Login
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default LoginSecretComponent;
