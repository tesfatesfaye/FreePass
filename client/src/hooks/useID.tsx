import {  useState } from "react";
import ModalInput from "../modals/UIcomponents/ModalInput";
import { idCardModalData } from "../data/secretsModalData";
const useID = () => {
 const [idInputs] = useState(idCardModalData);

  const idInputList = idInputs.map((input) => {
    return (
      <ModalInput
        key={input.id}
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
      />
    );
  });

  return { idInputList };
};

export default useID;


