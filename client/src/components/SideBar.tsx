import { GoChevronDown as ChevronDown } from "react-icons/go";
import useSidebar from "../hooks/useSidebar";
import { sideBarMapper } from "../utils/componentMappers";
const SideBar = () => {
  const { sidebarMainItems, sidebarSubItems } = useSidebar();

  return (
    <div className="sidebar pt-7 flex flex-col pl-1 w-1/6 bg-p-dark h-full">
      {sideBarMapper(sidebarMainItems)}
      <div className="flex text-custom-gray ml-2 gap-1 items-center text-l mt-4 mb-1 cursor-pointer">
        <ChevronDown size={30} />
        <span className="flex items-center">TYPES</span>
      </div>
      {sideBarMapper(sidebarSubItems)}
      <div className="flex text-custom-gray ml-2 gap-1 items-center text-l mt-1 mb-1">
        <ChevronDown size={30} />
        <span className="flex items-center">TAGS</span>
      </div>
    </div>
  );
};
export default SideBar;
