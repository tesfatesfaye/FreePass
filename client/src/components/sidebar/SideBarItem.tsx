import { FC, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import type { SideBarItemType } from "../../types/reactTypes/sideBarType";
import Icon from "../icons/IconComponent";
import type { SecretCategoryTypes } from "../../types/reactTypes/SecretCategoryTypes";

const SideBarItem: FC<SideBarItemType> = (props) => {
  const { sideBarItemIsSelected, toggleSideBarItemSelection,updateCurrentModal } =
    useContext(DashboardContext);
    const toggleModal = (
      e: React.MouseEvent<HTMLButtonElement>,
      modalName: SecretCategoryTypes
    ) => {
      e.stopPropagation();
      updateCurrentModal(modalName);
    };
  return (
    <button
      key={props.id}
      onClick={() => toggleSideBarItemSelection(props.name)}
      className={`flex text-white items-center gap-2  pl-2 pt-0 pb-0 cursor-pointer 
          pr-auto overflow-hidden transition-all duration-200 text-lg box-border
           ${
             props.isOpen
               ? " mb-2 max-h-[3rem] pt-[0.05rem] pb-[0.05rem]"
               : "m-0 p-0  max-h-0 "
           } ${
        props.name === sideBarItemIsSelected
          ? " bg-white bg-opacity-20"
          : " hover:bg-white hover:bg-opacity-10"
      } `}
    >
      <Icon type={props.icon} color={props.color} />
      {props.name}
      {props.isCategory && <Icon type="Add" size={20} className="ml-auto mr-4" onClick={(e)=>{toggleModal(e,props.icon)}} />}
     
    </button>
  );
};
export default SideBarItem;
