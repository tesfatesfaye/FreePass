import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import useLogin from "../../../hooks/useLogin";
import Modal from "../../../modals/Modal";
import TitleContainer from "../../../modals/UIcomponents/TitleContainer";
import TextArea from "../../../modals/UIcomponents/TextArea";
import AddTags from "../../../modals/UIcomponents/AddTags";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);
  const { loginInputsList, SSOToggle } = useLogin();

  if (currentModal !== "Login" && secretSelected !== "Login") return null;

  return (
    <Modal>
     
        <TitleContainer type="Login" />
        <form className="secret-form">
          {loginInputsList}
          <TextArea />
          <SSOToggle />
          <AddTags />
        </form>
      
    </Modal>
  );
};

export default LoginSecretComponent;
 