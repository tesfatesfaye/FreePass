import { FC } from "react";
import useSecret from "../../hooks/useSecret";
import SecretItem from "./SecretItem";
const SecretParent: FC = () => {
  const { hoveredSecretItemId, updateHoveredSecretItemId, secretHeight } =
    useSecret();
  const secrets = Array.from({ length: 20 }, (j, i) => (
    <SecretItem
      key={String(i)}
      id={String(i)}
      subtype="Email"
      type="Login"
      hoveredSecretItemId={hoveredSecretItemId}
      updateHoveredSecretItemId={updateHoveredSecretItemId}
    />
  ));
  return (
    <div
      style={{ maxHeight: secretHeight }}
      className="flex flex-col w-[22%] bg-p-dark text-white  border-l border-l-t-dark  overflow-y-auto box-border"
    >
      {secrets}
    </div>
  );
};

export default SecretParent;
