import React from "react";
import type { SideBarItem } from "../types/reactTypes/sideBarType";
import SideBarItems from "../components/SideBarItems";
// functions used for mapping react components
const sideBarMapper = (items: SideBarItem[],height:boolean=true) => {
  return items.map((item) => {
    return (
    <SideBarItems {...item} height={height} />
    );
  });
};

export { sideBarMapper };
