import { FC, useState } from "react";
import { v4 } from "uuid"
import { loginModalData } from "../data/secretsModalData";
import ModalInput from "../modals/UIcomponents/ModalInput";
import TextArea from "../modals/UIcomponents/TextArea";
import ToggleElement from "../modals/UIcomponents/ToggleElement";
const useLogin = () => {
  const [sso, setSso] = useState<boolean>(false);
  const toggleSso = () => setSso(!sso);
  const [loginInputs] = useState(loginModalData);

  const SSOToggle: FC = () => (
    <ToggleElement key={v4()}value={sso} name="SSO" toggler={toggleSso} />
  );

  const loginInputsList = loginInputs.map((input) => {
    return (
      <ModalInput
        key={input.id}
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
      />
    );
  });

  return { sso, toggleSso, loginInputsList, SSOToggle, TextArea};
};

export default useLogin;
