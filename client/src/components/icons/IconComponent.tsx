import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { IconNames } from "../../types/reactTypes/iconNamesTypes";
import icons from "./IconLibrary";

interface IconComponentProps {
  type: IconNames;
  size?: number;
  color?: string;
  title?: string;
  className?: string;
  style?: { [key: string]: string };
  attr?: { [key: string]: string | number | boolean };
  subType?: IconNames;
}

const IconComponent: FC<IconComponentProps> = (props) => {
  const Icon = icons[props.subType ?? props.type] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  if (!Icon) {
    console.warn(`Icon type '${props.type}' not found`);
    return null;
  }

  return <Icon key={uuidv4()} {...props} />;
};

export default IconComponent;
