import { FC, useContext } from "react";
import { FaRegTrashAlt as TrashIcon } from "react-icons/fa";
import { DashboardContext } from "../../context/DashboardContext";
import type { IconNames } from "../../types/reactTypes/iconNamesTypes";
import IconComponent from "../icons/IconComponent";
interface SecretItemProps {
  id: string;
  type: IconNames;
  subType?: IconNames;
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
      className={`flex relative items-center gap-5 h-[70px] bg-p-dark border-b border-b-t-dark p-2 w-full cursor-pointer

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
      <IconComponent
        type={props.type}
        subType={props.subType}
        className="ml-1"
        size={25}
        color={"white"}
      />
      <div className="flex flex-col gap-1 h-full mt-3 w-full">
        <span className="text-white">Login</span>
        <span className="text-custom-gray text-m flex w-full ">
          <small>tesfaget15@gmail.com</small>
          {props.subType !== undefined && hoveredSecretItemId !== props.id && (
            <IconComponent
              type={props.type}
              className="ml-auto mr-5  text-custom-gray"
              size={10}
            />
          )}
        </span>
      </div>
      {hoveredSecretItemId === props.id && (
        <div className="ml-auto flex mb-0 pb-0 mr-2 text-white hover:text-red-600">
          <TrashIcon className="" size={12} />
        </div>
      )}
    </div>
  );
};

export default SecretItem;
