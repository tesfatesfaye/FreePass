import { useEffect } from "react";
import { GoChevronDown as ChevronDown } from "react-icons/go";
import useSidebar from "../hooks/useSidebar";
import { sideBarMapper } from "../utils/componentMappers";
const SideBar = () => {
  const {
    sidebarMainItems,
    sidebarSubItems,
    isCategoriesDropdownOpen,
    isTagsDropdownOpen,
    toggleCategoriesDropdown,
    toggleTagsDropdown,
  } = useSidebar();
  useEffect(() => {
    console.log(`isCategoriesDropdownOpen: ${isCategoriesDropdownOpen}`);
    console.log(`isTagsDropdownOpen: ${isTagsDropdownOpen}`);
  }, [isCategoriesDropdownOpen, isTagsDropdownOpen]);

  return (
    <div className="sidebar pt-7 flex flex-col pl-1 w-1/6 bg-p-dark h-full select-none">
      {sideBarMapper(sidebarMainItems)}
      <div
        className="flex text-custom-gray ml-2 gap-1 items-center text-l mt-4 mb-1 cursor-pointer"
        onClick={toggleCategoriesDropdown}
      >
        <ChevronDown
          size={30}
          className={`${
            !isCategoriesDropdownOpen ? "transform rotate-180" : ""
          } transition duration-200`}
        />
        <span className="flex items-center">Catagories</span>
      </div>
      {sideBarMapper(sidebarSubItems, isCategoriesDropdownOpen)}
      <div
        className="flex text-custom-gray ml-2 gap-1 items-center text-l mt-1 mb-1 cursor-pointer mr-auto"
        onClick={toggleTagsDropdown}
      >
        <ChevronDown
          size={30}
          className={`${
            !isTagsDropdownOpen ? "transform rotate-180" : ""
          } transition duration-200`}
        />
        <span className="flex items-center">Tags</span>
      </div>
    </div>
  );
};
export default SideBar;
