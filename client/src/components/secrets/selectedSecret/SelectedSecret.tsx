import React,{FC} from "react"; 
import IconComponent from "../../icons/IconComponent";
const SelectedSecret:FC = () => {
    return (
      <div className="text-white flex h-full flex-grow  items-center justify-center opacity-60">
        <IconComponent type="MainIcon" size={150} />
      </div>
    );
}

export default SelectedSecret

