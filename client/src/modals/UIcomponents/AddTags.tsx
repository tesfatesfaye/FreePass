import{FC} from 'react';
import Icon from '../../components/icons/IconComponent';
const AddTags : FC = () => {

    return(<>
          <span className="text-purple-500 ml-1 font-semibold">tags</span>
          <div className=" flex w-[90px] gap-1 pl-1 pr-1 text-slate-400  ml-2 items-center bg-s-dark rounded-full text-sm font-medium shadow">
            <Icon type="Add" />
            Add tag
          </div>
    </>
    )
}

export default AddTags; 
