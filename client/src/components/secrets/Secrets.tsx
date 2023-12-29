import * as ScrollArea from "@radix-ui/react-scroll-area";
import "../../assets/App.css"
import { useEffect, useState } from "react";
import { FC } from "react";
import useSecret from "../../hooks/useSecret";
import SecretItem from "./SecretItem";
const SecretParent: FC = () => {
  const { hoveredSecretItemId, updateHoveredSecretItemId, secretHeight } =
    useSecret();
  const secrets = Array.from({ length: 20 }, (_, i) => (
    <SecretItem
      key={String(i)}
      id={String(i)}
      subtype="Email"
      type="Login"
      hoveredSecretItemId={hoveredSecretItemId}
      updateHoveredSecretItemId={updateHoveredSecretItemId}
    />
  ));
  const [hasOverflow, setHasOverflow] = useState(false);
  // other code...

  useEffect(() => {
    const element = document.getElementById("your-scroll-area-id");
    if (element) {
      const isOverflowing = element.scrollHeight > element.clientHeight;
      setHasOverflow(isOverflowing);
    }
  }, []); // Add dependencies as needed

  return (
    <ScrollArea.Root
      id="your-scroll-area-id"
      style={{ maxHeight: secretHeight }}
      className="w-[22%] rounded overflow-visible box-border"
    >
      <ScrollArea.Viewport
        className="w-full h-full rounded "
        style={{ minHeight: "20%" }}
      >
        {secrets}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 h-full bg-p-dark transition-colors  ease-out hover: data-[orientation=vertical]:w-2.5 "
        orientation="vertical"
            >
        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] h-full data-[state=visible] hover:bg-mauve9 cursor-pointer relative" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA5" />
    </ScrollArea.Root>
  );
};

export default SecretParent;
