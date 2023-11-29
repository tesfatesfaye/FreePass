import type { SideBarItem } from "../types/reactTypes/sideBarType";
const SideBarItems = (props: SideBarItem) => {
  return (
    <div
      key={props.id}
      className={`flex text-white items-center gap-2 ml-2 font-semibold mb-3 cursor-pointer mr-auto overflow-hidden transition-all duration-300 ${
        props.height ? "" : "h-0 mb-0"
      }`}
    >
      <props.icon />
      {props.name }
    </div>
  );
};

export default SideBarItems;
