import IconComponent from "../icons/IconComponent";
import { DashboardContext } from "../../context/DashboardContext";
import { FC ,useContext} from "react";
const AddSecretButton :FC= () => {
    const { updateCurrentModal } = useContext(DashboardContext);
  return (
    <button
      onClick={() => updateCurrentModal("AddSecret")}
      className="flex mt-auto mb-10 ml-3 mr-3 py-2 gap-1 text-font-dark justify-center items-center rounded bg-t-dark"
    >
      <IconComponent type="Add" size={25} />
    </button>
  );
};

export default AddSecretButton;