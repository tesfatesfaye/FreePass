import { FC } from "react";
import useSecret from "../../hooks/useSecret";
import SecretItem from "./SecretItem";
import ScrollWrapper from "../ScrollBarWrapper";
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
  // other code...


  return (
    <div className="w-[22%] bg-p-dark border-l border-l-t-dark rounded overflow-hidden box-border h-full" style={{maxHeight:secretHeight}} >
    <ScrollWrapper>
      {secrets}
    </ScrollWrapper>
    </div>
  );
};

export default SecretParent;
