import { FC, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import IconComponent from "../components/icons/IconComponent";
import { sideBarSub } from "../data/sideBarData";
import { v4 } from "uuid";
import Modal from "./Modal";
const AddSecret: FC = () => {
  const { currentModal } = useContext(DashboardContext);
  if (currentModal !== "AddSecret") return null;
  const mapper=sideBarSub.map((item)=>{
    return (
      <button
        key={v4()}
        className="flex items-center bg-t-dark h-[50px] hover:bg-white hover:bg-opacity-30"
      >
        <IconComponent type={item.icon} size={30} className="ml-3 mr-auto" />
        <p className="text-lg ml-auto mr-auto">{item.name}</p>
        <IconComponent className="mr-3" type="Add" />
      </button>
    );
  })
  return (
    <Modal>
      <div className="flex fixed top-0 left-0 right-0 bottom-0 z-50">
        <div className="grid grid-cols-2 gap-1 py-10 gap-x-2 absolute top-[20%] left-[50%] px-5 w-[30%] transform -translate-x-1/2 h-auto bg-p-dark text-white rounded">
          {mapper}
        </div>
      </div>
    </Modal>
  );
};
export default AddSecret;
