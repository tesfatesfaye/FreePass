import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import useLogin from "../../../hooks/useLogin";
import Modal from "../../../modals/Modal";
import TitleContainer from "../../../modals/UIcomponents/TitleContainer";
import AddTags from "../../../modals/UIcomponents/AddTags";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);
  const { loginInputsList, SSOToggle } = useLogin();

  if (currentModal !== "Login" && secretSelected !== "Login") return null;

  return (
    <Modal>
      <div className=" flex flex-col w-auto ml-8 gap-3 box-border pt-5 mr-3">
        <TitleContainer type="Login" />
        <form className="flex flex-col gap-[1.5px]">
          {loginInputsList}
          <div className=" bg-black bg-opacity-20 w-auto rounded-md flex flex-col pl-3 pb-4">
            <label htmlFor="notes" className="text-purple-500 text-xs mt-1">
              notes
            </label>
            <textarea
              className=" text-slate-400 bg-black bg-opacity-0 text-xs h-8 flex items-center w-full outline-none  "
              placeholder="Add any description of the secret here"
              name="textarea"
            />
          </div>
          <SSOToggle />
        <AddTags />
        </form>
      </div>
    </Modal>
  );
};

export default LoginSecretComponent;
