import type { SideBarItem } from "../types/reactTypes/sideBarType";
// functions used for mapping react components
const sideBarMapper = (items:SideBarItem[], isOpen:boolean = true) => {
  return items.map((item) => {

    return (
      <div
        key={item.id}
        className={`flex text-white items-center gap-2 font-semibold ml-2 cursor-pointer mr-auto overflow-hidden transition-all duration-300
        ${isOpen ? " mb-3 h-auto" : "m-0 p-0 h-0"}`}
      >
        <item.icon />
        {item.name}
      </div>
    );
  });
};


export { sideBarMapper };
