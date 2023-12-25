import { FC } from "react";
import SecretItem from "./SecretItem";
import useSecret from "../../hooks/useSecret";
const SecretParent: FC = () => {
   const { hoveredSecretItemId, updateHoveredSecretItemId, secretHeight } =
     useSecret();
  const secrets = Array.from({ length: 10 }, (j, i) => (
    <SecretItem
      key={String(i)}
      id={String(i)}
      subtype="Email"
      type="Lock"
      hoveredSecretItemId={hoveredSecretItemId}
      updateHoveredSecretItemId={updateHoveredSecretItemId}
    />
  ));
  return (
    <div
      style={{ maxHeight: secretHeight }}
      className={`flex flex-col w-[22%] px] bg-p-dark text-white  border-l border-l-t-dark  overflow-y-auto box-border `}
    >
      {secrets}
    </div>
  );
};

export default SecretParent;
