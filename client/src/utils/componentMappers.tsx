import type { SideBarItem } from "../types/reactTypes/sideBarType";
// functions used for mapping react components
const sideBarMapper = (items: SideBarItem[]) => {
  return items.map((item) => {
    return (
      <div
        key={item.id}
        className="flex text-white items-center gap-2 ml-2 font-semibold mb-3 cursor-pointer "
      >
        <item.icon />
        {item.name}
      </div>
    );
  });
};

export { sideBarMapper };
