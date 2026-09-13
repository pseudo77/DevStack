import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Itechnology } from "../type/Type";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

interface IselectedCardProps{
    selected:Itechnology,
    handleRemoveStack:(selected:Itechnology)=>void,
    
}
const SelectedCard = ({selected, handleRemoveStack}:IselectedCardProps) => {
    return (
        <div >
            <div className="flex  justify-between items-center  border border-slate-100 p-2 mb-4 rounded-2xl  ">
                <div className="flex justify-between gap-3 align-middle items-center">
                    
                        <img src={selected.icon} className="max-md:w-8 max-md:h-6 w-12 h-10 object-cover  rounded-2xl" alt="icon" />
                        <div className="leading-relaxed">
                            <h1 className="font-bold text-[10px] text-[#0F172A] ">{selected.name} </h1>
                            <h2 className="font-bold text-[6px] text-[#94A3B8] ">{selected.category} </h2>
                        </div>
                    
                </div>
                <div onClick={()=>handleRemoveStack(selected)} className="text-[25px] text-[#94A3B8] cursor-pointer hover:scale-110 ">
                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;