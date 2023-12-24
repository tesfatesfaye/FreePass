import { FC } from "react";
import { GoChevronDown as ChevronDown } from "react-icons/go";
import useSidebar from "../../hooks/useSidebar";
import { sideBarMapper } from "../../utils/sidebarMapper";
import SideBarItem from "./SideBarItem";
import IconComponent from "../icons/IconComponent";
const SideBar: FC = () => {
  const {
    sidebarMainItems,
    sidebarSubItems,
    isCategoriesDropdownOpen,
    isTagsDropdownOpen,
    toggleCategoriesDropdown,
    toggleTagsDropdown,
  } = useSidebar();

  return (
    <div className="sidebar pt-7 flex flex-col  w-[16%] bg-p-dark h-full select-none">
      {sideBarMapper(sidebarMainItems, SideBarItem)}
      <div
        className="flex text-custom-gray ml-2 gap-1 items-center text-l mt-4 mb-1 cursor-pointer"
        onClick={toggleCategoriesDropdown}
        tabIndex={0}
      >
        <ChevronDown
          size={30}
          className={`${
            !isCategoriesDropdownOpen ? "transform rotate-270" : ""
          } transition duration-200`}
        />
        <span className="flex items-center">Catagories</span>
      </div>
      {sideBarMapper(sidebarSubItems, SideBarItem, isCategoriesDropdownOpen)}
      <div
        className="flex text-custom-gray ml-2 gap-1 items-center text-ml mt-1 mb-1 cursor-pointer mr-auto"
        onClick={toggleTagsDropdown}
      >
        <ChevronDown
          size={30}
          className={`${
            !isTagsDropdownOpen ? "transform rotate-270" : ""
          } transition duration-200`}
        />
        <span className="flex items-center">Tags</span>
      </div>
      <button className="flex mt-auto mb-10 ml-3 mr-3 py-2 gap-1 text-font-dark justify-center items-center rounded bg-t-dark">
        <IconComponent type="Add" size={25}/>
      </button>
    </div>
  );
};
export default SideBar;
