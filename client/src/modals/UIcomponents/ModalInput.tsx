import {FC} from 'react';

interface ModalInputProps {
    type: string;
    placeholder: string;
    name: string;

}
const ModalInput: FC <ModalInputProps> = ({ type, placeholder, name }) => {
  return (
    <div className=" bg-black bg-opacity-40  w-auto rounded-md flex flex-col pl-3 pb-2">
      <label htmlFor={name} className="text-purple-500 text-xs mt-1">
        {name}
      </label>
      <label htmlFor={name} className="w-full">
        <input
          id={name}
          className=" text-slate-400 bg-black bg-opacity-0  flex items-center w-full outline-none  "
          placeholder={type !== "date" ? placeholder : ""}
          type={type}
          name={name}
        />
      </label>
    </div>
  );
};

export default ModalInput;