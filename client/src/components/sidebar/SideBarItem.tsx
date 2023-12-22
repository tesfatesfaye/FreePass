import { FC, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import type { SideBarItemType } from "../../types/reactTypes/sideBarType";
import IconComponent from "../icons/IconComponent";
import {v4 as uuidv4} from "uuid";

const SideBarItem: FC<SideBarItemType> = (props) => {
  const { sideBarItemIsSelected, toggleSideBarItemSelection } =
    useContext(DashboardContext);

  return (
    <button
      key={props.id}
      onClick={() => toggleSideBarItemSelection(props.name)}
      className={`flex text-white items-center gap-2  pl-2 pt-0 pb-0 cursor-pointer 
          pr-auto overflow-hidden transition-all duration-300 text-lg
           ${
             props.isOpen
               ? " mb-3 h-auto"
               : "m-0 p-0 pt-[0.05rem] pb-[0.05rem] h-0 "
           } ${
        props.name === sideBarItemIsSelected
          ? " bg-white bg-opacity-20"
          : " hover:bg-white hover:bg-opacity-10"
      } `}
    >
      <IconComponent id={uuidv4()} type={props.icon} />
      {props.name}
    </button>
  );
};
export default SideBarItem;
