  import { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import useLogin from "../../../hooks/useLogin";
import Modal from "../../../modals/Modal";
import Icon from "../../icons/IconComponent";
const LoginSecretComponent: FC = () => {
  const { secretSelected, currentModal } = useContext(DashboardContext);
  const { sso, toggleSso } = useLogin();

  if (currentModal !== "Login" && secretSelected !== "Login") return null;

  return (
    <Modal>
      <div className=" flex flex-col w-auto ml-8 gap-3 box-border pt-5 mr-3">
        <div className="relative flex gap-1 max-w-[100%] ml-2 mb-2 items-center box-border cursor-pointer">
          <Icon type="PlaceHolder" className="text-slate-300" size={40} />
          <Icon
            type="DownBackGround"
            className="absolute left-6 top-7 text-slate-400  "
            size={15}
          />
          <div className="flex items-center gap-1 bg-black bg-opacity-10 rounded-md w-full pr-4 py-1 ">
            <input
              className=" w-full flex box-border rounded-md  bg-transparent items-center text-slate-300 text-2xl font-semibold 
              flex-grow outline-none"
              type="text"
              name="title"
              autoFocus
            />
            <Icon type="Favorite" className="text-slate-300" size={20} />
          </div>
        </div>
        <form className="flex flex-col gap-[1.5px]">
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
              className=" text-slate-400 bg-black bg-opacity-0  flex items-center w-full outline-none"
              placeholder="abc@gmail.com"
              type="email"
              name="Email"
            />
          </div>
          <div className=" bg-black bg-opacity-40  w-auto rounded-md flex flex-col pl-3 pb-2">
            <label htmlFor="username" className="text-purple-500 text-xs mt-1">
              password
            </label>
            <input
              className=" text-slate-400 bg-black bg-opacity-0  flex items-center w-full outline-none"
              placeholder="password"
              type="password"
              name="Password"
            />
          </div>

          <div className=" bg-black bg-opacity-40 w-auto rounded-md flex flex-col pl-3 pb-2">
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
          <div className=" bg-black bg-opacity-20 w-auto rounded-md flex flex-col pl-3 pb-4">
            <label htmlFor="username" className="text-purple-500 text-xs mt-1">
              notes
            </label>
            <input
              className=" text-slate-400 bg-black bg-opacity-0 text-xs h-8 flex items-center w-full outline-none  "
              placeholder="Add any description of the secret here"
              type="url"
              name="Url"
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
          <button className=" flex w-[90px] gap-1 pl-1 pr-1 text-slate-400  ml-2 items-center bg-s-dark rounded-full text-sm font-medium shadow">
            <Icon type="Add" />
            Add tag
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginSecretComponent;
