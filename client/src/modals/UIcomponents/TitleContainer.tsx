import { FC } from "react";

import Icon from "../../components/icons/IconComponent";
import { SecretCategoryTypes } from "../../types/reactTypes/SecretCategoryTypes";
interface TitleContainerProps {
  type: SecretCategoryTypes;
}

const TitleContainer: FC<TitleContainerProps> = ({ type }) => {
  return (
    <div className="relative flex gap-1 max-w-[100%] ml-2 mb-2 items-center box-border cursor-pointer">
      <Icon type="PlaceHolder" className="text-slate-300" size={40} />
      <Icon
        type="DownBackGround"
        className="absolute left-6 top-7 text-slate-400  "
        size={15}
      />
      <div className="flex items-center gap-1 bg-black bg-opacity-10 rounded-md w-full pr-4 py-1 ">
        <input
          className=" w-full flex box-border rounded-md  bg-transparent items-center text-slate-300 text-2xl font-semibold 
              flex-grow outline-none"
          type="text"
          name="title"
          value={type}
          autoFocus
        />
        <Icon type="Favorite" className="text-slate-300" size={20} />
      </div>
    </div>
  );
};

export default TitleContainer;
