import { FC, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import type { IconNames } from "../../types/reactTypes/iconNamesTypes";
import Icon from "../icons/IconComponent";
interface SecretItemProps {
  id: string;
  type: IconNames;
  subtype?: IconNames;
  hoveredSecretItemId: string | null;
  updateHoveredSecretItemId: (id: string | null) => void;
}

const SecretItem: FC<SecretItemProps> = (props) => {
  const {
    updateSecretSelected,

    secretSelected,
  } = useContext(DashboardContext);
  return (
    <div
      className={`flex relative items-center gap-5 h-[70px] bg-p-dark border-b border-b-t-dark  p-2 w-full cursor-pointer

        ${
          secretSelected === props.id
            ? "bg-white bg-opacity-20"
            : "hover:bg-white hover:bg-opacity-10"
        }
      `}
      onClick={() => updateSecretSelected(props.id)}
      onMouseEnter={() => props.updateHoveredSecretItemId(props.id)}
      onMouseLeave={() =>
        props.hoveredSecretItemId === props.id
          ? props.updateHoveredSecretItemId(null)
          : null
      }
    >
      <Icon
        type={props.type}
        subtype={props.subtype}
        className="ml-1"
        size={25}
        color={"white"}
      />
      <div className="flex flex-col gap-1 h-full mt-3 w-full">
        <span className="text-white">Login </span>
        <span className="text-custom-gray text-m flex w-full ">
          <small>tesfaget15@gmail.com</small>
          {props.subtype !== undefined &&
            props.hoveredSecretItemId !== props.id && (
              <Icon
                type={props.type}
                className="ml-auto mr-5  text-custom-gray"
                size={10}
              />
            )}
        </span>
      </div>
      {props.hoveredSecretItemId === props.id && (
        <div className="ml-auto flex mb-0 pb-0 mr-2 text-white hover:text-red-600">
          <Icon type="Trash" size={12} />
        </div>
      )}
    </div>
  );
};

export default SecretItem;
