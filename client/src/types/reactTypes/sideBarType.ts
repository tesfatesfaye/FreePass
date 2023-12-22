import React from "react";

interface SideBarItemType {
  id: string;
  name: string;
  icon: React.ElementType;
  isOpen?: boolean;
  
}

export type { SideBarItemType };