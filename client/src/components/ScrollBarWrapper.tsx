import * as ScrollArea from "@radix-ui/react-scroll-area";
import { FC, ReactElement, ReactNode } from 'react';

interface ScrollWrapperType {
  children: ReactElement[] | ReactElement | ReactNode;
}

const ScrollWrapper: FC<ScrollWrapperType> = ({ children }) => {
  return (
    <ScrollArea.Root className="h-full w-full">
      <ScrollArea.Viewport className="w-full h-full rounded ">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 h-full bg-p-dark transition-colors duration-75  ease-out hover: data-[orientation=vertical]:w-2.5 "
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] h-full data-[state=visible] hover:bg-mauve9 cursor-pointer relative" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA5" />
    </ScrollArea.Root>
  );
};

export default ScrollWrapper;
