import { FC } from "react";
import icons from "./IconLibrary";

interface IconComponentProps {
  id: string;
  type: string;
  size?: number;
  color?: string;
  title?: string;
  className?: string;
  style?: { [key: string]: string };
  attr?: { [key: string]: string | number | boolean };
}

const IconComponent: FC<IconComponentProps> = (props) => {
  const Icon = icons[props.type];
      
  if (!Icon) {
    console.warn(`Icon type '${props.type}' not found`);
    return null;
  }

  return <Icon key={props.id} {...props} />;
};

export default IconComponent;
