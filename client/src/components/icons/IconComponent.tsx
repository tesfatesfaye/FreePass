import React, { FC } from "react";
import icons from "./IconLibrary";

type IconNames = keyof typeof icons;
interface IconComponentProps {
  id: string;
  type: IconNames;
  size?: number;
  color?: string;
  title?: string;
  className?: string;
  style?: { [key: string]: string };
  attr?: { [key: string]: string | number | boolean };
}

const IconComponent: FC<IconComponentProps> = (props) => {
  const Icon = icons[props.type] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  if (!Icon) {
    console.warn(`Icon type '${props.type}' not found`);
    return null;
  }

  return <Icon key={props.id} {...props} />;
};

export default IconComponent;
