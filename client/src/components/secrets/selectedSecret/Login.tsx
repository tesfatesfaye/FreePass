import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import useLogin from "../../../hooks/useLogin";
import Modal from "../../../modals/Modal";
import TitleContainer from "../../../modals/UIcomponents/TitleContainer";
import AddTags from "../../../modals/UIcomponents/AddTags";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);
  const { loginInputsList, SSOToggle,TextArea } = useLogin();

  if (currentModal !== "Login" && secretSelected !== "Login") return null;

  return (
    <Modal>
      <div className=" flex flex-col w-auto ml-8 gap-3 box-border pt-5 mr-3">
        <TitleContainer type="Login" />
        <form className="flex flex-col gap-[1.5px]">
          {loginInputsList}
          <TextArea/>
          <SSOToggle />
          <AddTags />
        </form>
      </div>
    </Modal>
  );
};

export default LoginSecretComponent;
