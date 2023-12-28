import { FC } from "react";
import AutoSize from "react-textarea-autosize";
interface ModalInputProps {
  placeholder?: string;
  name?: string;
}

const ModalInput: FC<ModalInputProps> = ({
  placeholder = "Add any description of the secret here",
  name = "Notes",
}) => {
  return (
    <div className=" bg-black bg-opacity-20 w-auto rounded-md flex flex-col pl-3 pb-4">
      <label htmlFor="notes" className="text-purple-500 text-xs mt-1">
        notes
      </label>
      <AutoSize
        className=" text-slate-400 bg-transparent text-sm h-8 flex items-center w-full outline-none  "
        placeholder={placeholder}
        name={name}
        minRows={2}
      />
    </div>
  );
};

export default ModalInput;