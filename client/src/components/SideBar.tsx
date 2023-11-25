import { GoChevronDown as ChevronDown } from "react-icons/go";
import useSidebar from "../hooks/useSidebar";
const SideBar = () => {
  const { sidebarMainItems, sidebarSubItems } = useSidebar();
  const mainItems = sidebarMainItems.map((item) => {
    return (
      <div
        key={item.id}
        className="flex text-white items-center gap-2 ml-2 font-semibold mb-3 "
      >
        <item.icon />
        {item.name}
      </div>
    );
  });
  const subItems = sidebarSubItems.map((item) => {
    return (
      <div
        key={item.id}
        className="flex text-white items-center gap-2 ml-2 font-semibold mb-3 "
      >
        <item.icon />
        {item.name}
      </div>
    );
  });

  return (
    <div className="sidebar pt-7 flex flex-col pl-1 w-1/6 bg-p-dark h-full">
      {mainItems}
      <div className="flex text-custom-gray ml-2 gap-1 items-center text-l mt-4 mb-1">
        <ChevronDown size={30} />
        <span className="flex items-center">TYPES</span>
      </div>
      {subItems}
    </div>
  );
};
export default SideBar;
