import React, { FC } from "react";
import { v4 } from "uuid";
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
  subtype?: IconNames;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  }

const IconComponent: FC<IconComponentProps> = (props) => {
  const Icon = icons[props.subtype ?? props.type] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  if (!Icon) {
    console.warn(`Icon type '${props.type}' not found`);
    return null;
  }

  return <Icon key={v4()} {...props} />;
};

export default IconComponent;
