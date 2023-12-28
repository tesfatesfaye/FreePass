import { useState } from "react";
import { v4 } from "uuid";
import ModalInput from "../modals/UIcomponents/ModalInput";
import TextArea from "../modals/UIcomponents/TextArea";
import AddTags from "../modals/UIcomponents/AddTags";
const usePayment = () => {
  const [paymentInputs] = useState([
    {
      id: v4(),
      type: "text",
      placeholder: "Card Holder Name",
      name: "cardHolderName",
    },
    { id: v4(), type: "text", placeholder: "Card Number", name: "cardNumber" },
    { id: v4(), type: "text", placeholder: "CVV", name: "cvv" },
    { id: v4(), type: "text", placeholder: "PIN", name: "pin" },
    { id: v4(), type: "date", placeholder: "", name: "validFrom" },
    { id: v4(), type: "date", placeholder: "", name: "expiryDate" },
  ]);

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

    return { paymentInputsList, TextArea, AddTags };
}

  export  { usePayment}
