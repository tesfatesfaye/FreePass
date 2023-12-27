import {FC,useEffect,useRef} from "react"; 
import IconComponent from "../../icons/IconComponent";
const SelectedSecret:FC = () => {
const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if(ref.current!==null){
           console.log(ref.current.offsetWidth)}
    };
    handleResize()
  
  },)

    return (
      <div ref={ref}className="text-white flex h-full flex-grow 
       items-center justify-center opacity-60">
        <IconComponent type="MainIcon" size={175} />
      </div>
    );
}

export default SelectedSecret

