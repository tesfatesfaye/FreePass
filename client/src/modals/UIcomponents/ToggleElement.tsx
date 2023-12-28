import {FC} from 'react';
import Icon from '../../components/icons/IconComponent';
interface ToggleElementProps {
  value: boolean;
  name: string;
  toggler: () => void;
}


const ToggleElement : FC <ToggleElementProps> = ({value,toggler,name}) => {

return (
  <div
    className="flex gap-[4px] items-center cursor-pointer w-[5rem] p-1  h-[30px] font-semibold text-white"
    onClick={()=>toggler()}
  >
    <span className="text-white flex items-center text-md">{name}</span>

    <Icon
      className={`  ${value ? "text-purple-500" : "text-slate-400"}`}
      type={value ? "On" : "Off"}
      size={20}
    />
  </div>
);

}

export default ToggleElement;