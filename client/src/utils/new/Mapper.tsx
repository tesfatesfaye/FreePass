import  { FC, ReactElement } from "react";
import { v4 } from "uuid";

interface MapperProps<T> {
  Component: FC<T>;
  componentProps: T[];
  isOpen?: boolean;
}

const Mapper=<T,>({
  Component,
  componentProps,
}: MapperProps<T>): ReactElement=> {
  return (
    
    <>
      {componentProps.map((props) => (
        <Component key={v4()} {...props} />
      ))}
    </>
  );
}

export default Mapper;
