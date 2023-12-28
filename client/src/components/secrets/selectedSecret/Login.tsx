  import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import useLogin from "../../../hooks/useLogin";
import Modal from "../../../modals/Modal";
import Icon from "../../icons/IconComponent";
import TitleContainer from "../../../modals/UIcomponents/TitleContainer";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);
  const { sso, toggleSso,loginInputsList } = useLogin();

  if (currentModal !== "Login" && secretSelected !== "Login") return null;

  return (
    <Modal>
      <div className=" flex flex-col w-auto ml-8 gap-3 box-border pt-5 mr-3">
        <TitleContainer type="Login"/>
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
          <div
            className="flex gap-[4px] items-center cursor-pointer  w-[5rem] p-1  h-[30px] font-semibold text-white"
            onClick={toggleSso}
          >
            <span className="text-white flex items-center text-md">SSO</span>

            <Icon
              className={`  ${sso ? "text-purple-500" : "text-slate-400"}`}
              type={sso ? "On" : "Off"}
              size={20}
            />
          </div>
          <span className="text-purple-500 ml-1 font-semibold">tags</span>
          <div className=" flex w-[90px] gap-1 pl-1 pr-1 text-slate-400  ml-2 items-center bg-s-dark rounded-full text-sm font-medium shadow">
            <Icon type="Add" />
            Add tag
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginSecretComponent;
