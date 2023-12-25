import { FC, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import type { SideBarItemType } from "../../types/reactTypes/sideBarType";
import IconComponent from "../icons/IconComponent";

const SideBarItem: FC<SideBarItemType> = (props) => {
  const { sideBarItemIsSelected, toggleSideBarItemSelection } =
    useContext(DashboardContext);

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
      <IconComponent type={props.icon} color={props.color} />
      {props.name}
    </button>
  );
};
export default SideBarItem;
