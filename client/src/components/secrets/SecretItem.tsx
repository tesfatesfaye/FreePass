import { FC, useContext } from "react";
import { FaRegTrashAlt as TrashIcon } from "react-icons/fa";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { DashboardContext } from "../../context/DashboardContext";
import IconComponent from "../icons/IconComponent";

interface SecretItemProps {
    id: string;
}

const SecretItem: FC<SecretItemProps> = (props) => {
  const {
    updateSecretSelected,
    updateHoveredSecretItemId,
    hoveredSecretItemId,
    secretSelected,
  } = useContext(DashboardContext);
  return (
    <div
      className={`flex items-center gap-5 h-[70px] bg-p-dark border-b border-b-t-dark p-2 w-full cursor-pointer
        ${
          secretSelected === props.id
            ? "bg-white bg-opacity-20"
            : "hover:bg-white hover:bg-opacity-10"
        }
      `}
      onClick={() => updateSecretSelected(props.id)}
      onMouseEnter={() => updateHoveredSecretItemId(props.id)}
      onMouseLeave={() =>
        hoveredSecretItemId === props.id
          ? updateHoveredSecretItemId(null)
          : null
      }
    >
      <TfiLayoutPlaceholder className="ml-1" size={25} color={"white"} />
      <div className="flex flex-col gap-1 h-full mt-3">
        <p className="text-white">Login</p>
        <p className="text-custom-gray text-sm">tesfaget15@gmail.com</p>
      </div>
      {hoveredSecretItemId === props.id && (
        <button className="ml-auto mr-2 text-white hover:text-red-600">
          <TrashIcon className="" size={15} />
        </button>
      )}
    </div>
  );
};

export default SecretItem;
