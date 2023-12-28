import { FC, useContext, useEffect } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import type { SideBarItemType } from "../../types/reactTypes/SideBarTypes";
import Icon from "../icons/IconComponent";

const SideBarItem: FC<SideBarItemType> = ({id, name,icon, color,isOpen=true}) => {
  const { sideBarItemIsSelected, toggleSideBarItemSelection } =
    useContext(DashboardContext);
    useEffect(() => {
      console.log(isOpen)
    },[isOpen])
  return (
    <button
      key={id}
      onClick={() => toggleSideBarItemSelection(name)}
      className={`flex text-white items-center gap-2  pl-2 pt-0 pb-0 cursor-pointer 
          pr-auto overflow-hidden transition-all duration-200 text-lg box-border
           ${
            isOpen === true 
               ? " mb-2 max-h-[3rem] pt-[0.05rem] pb-[0.05rem]"
               : "m-0 p-0  max-h-0 "
           } ${
       name === sideBarItemIsSelected
          ? " bg-white bg-opacity-20"
          : " hover:bg-white hover:bg-opacity-10"
      } `}
    >
      <Icon type={icon} color={color} />
      {name}
    </button>
  );
};
export default SideBarItem;
