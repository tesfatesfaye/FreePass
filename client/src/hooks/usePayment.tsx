import { useState } from "react";
import{paymentModalData} from '../data/secretsModalData'
import ModalInput from "../modals/UIcomponents/ModalInput";
const usePayment = () => {
  const [paymentInputs] = useState(paymentModalData);

  const paymentInputsList = paymentInputs.map((input) => {
    return (
      <ModalInput
        key={input.id}
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
      />
    );
  });

    return { paymentInputsList };
}

  export  { usePayment}
