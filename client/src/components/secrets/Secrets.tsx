import { FC } from "react";
import useSecret from "../../hooks/useSecret";
import ScrollWrapper from "../ScrollBarWrapper";
import SecretItem from "./SecretItem";
const SecretParent: FC = () => {
  const { hoveredSecretItemId, updateHoveredSecretItemId, secretHeight } =
    useSecret();
  const secrets = Array.from({ length: 40 }, (_, i) => (
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
      className="w-[22%] bg-p-dark border-l border-l-t-dark rounded overflow-hidden box-border h-full"
      style={{ maxHeight: secretHeight }}
    >
      <ScrollWrapper>{secrets}</ScrollWrapper>
    </div>
  );
};

export default SecretParent;
