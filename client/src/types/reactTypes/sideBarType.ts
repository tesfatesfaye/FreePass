import React from "react";

interface SideBarItem {
  id: string;
  name: string;
  icon: React.ElementType;
  height?: boolean;
}

export type { SideBarItem}