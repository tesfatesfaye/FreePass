import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import Modal from "../../../modals/Modal";
import Icon from "../../icons/IconComponent";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);

  if (currentModal !== "Login") return null;

  return (
    <Modal>
      <div className=" flex flex-col w-auto ml-8 gap-3 box-border pt-5 mr-3">
        <div className="flex gap-1 max-w-[100%] ml-2 mb-2 items-center box-border">
          <Icon type="Login" className="text-slate-300" size={45} />
          <div className=" pl-3 flex box-border py-1 items-center text-slate-300 text-2xl font-semibold  bg-black bg-opacity-10 rounded-md flex-grow">
            Login
          </div>
        </div>
        <form className="flex flex-col gap-1">
          <div className=" bg-black bg-opacity-40  w-auto rounded-md flex flex-col pl-3 pb-2">
            <label htmlFor="username" className="text-purple-500 text-xs mt-1">
              username
            </label>
            <input
              className=" text-slate-400 bg-black bg-opacity-0  flex items-center w-full outline-none  "
              placeholder="username"
              type="text"
              name="username"
            />
          </div>

          <div className=" bg-black bg-opacity-40  w-auto rounded-md flex flex-col pl-3 pb-2">
            <label htmlFor="username" className="text-purple-500 text-xs mt-1">
              email
            </label>
            <input
              className=" text-slate-400 bg-black bg-opacity-0  flex items-center w-full outline-none  "
              placeholder="email"
              type="email"
              name="Email"
            />
          </div>

          <div className=" bg-black bg-opacity-40  w-auto rounded-md flex flex-col pl-3 pb-2">
            <label htmlFor="username" className="text-purple-500 text-xs mt-1">
              url
            </label>
            <input
              className=" text-slate-400 bg-black bg-opacity-0  flex items-center w-full outline-none  "
              placeholder="https://google.com"
              type="url"
              name="Url"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginSecretComponent;
