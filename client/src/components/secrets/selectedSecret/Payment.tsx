import  { FC, useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import { usePayment } from "../../../hooks/usePayment";
import Modal from "../../../modals/Modal";
import AddTags from "../../../modals/UIcomponents/AddTags";
import TextArea from "../../../modals/UIcomponents/TextArea";
import TitleContainer from "../../../modals/UIcomponents/TitleContainer";
const Payment: FC = (props:any) => {
  const { secretSelected, currentModal } = useContext(DashboardContext);
  const { paymentInputsList } = usePayment();
  if (currentModal !== "Payment" && secretSelected !== "Payment") return null;

  return (
    <Modal>
      <TitleContainer type="Payment" />
      <form className="secret-form">
        {paymentInputsList}
        <TextArea />
        <AddTags />

      </form>
    </Modal>
  );
};

export default Payment;