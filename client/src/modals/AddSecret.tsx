import { FC } from "react";
import ReactPortal from "./ReactPortal";
const AddSecret: FC = (props: any) => {
  return (
    <ReactPortal wrapperId="portal">
      <div className="modal-overlay"></div>
      <div className="fixed top-1/2 left-1/2  z-50 text-white h-96 my-auto mx-auto">
        Hello
      </div>
    </ReactPortal>
  );
};
export default AddSecret;
