import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { Itechnology } from "../type/Type";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";


interface IcardProps{
    technology:Itechnology
    handleSelectedTechno:()=>void
}

const TechnologyCard = ({technology, handleSelectedTechno}:IcardProps) => {
    const [addStack, setAddStack]=useState<boolean>(false)
            type add=true|false
            const handleAddStack=(value:add)=>{
                setAddStack(value)
                handleSelectedTechno()
                toast.success('Added to Stack', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            }

    return (
        <div>
            <div className="border border-slate-200 rounded-2xl w-auto h-71.25 p-5 leading-tight">
                                
                                    <div className="flex justify-between items-center">
                                        <img className=" w-12 h-12 object-cover object-top rounded-2xl" src={technology.icon} alt="" />
                                        <p className={`${technology.badgeColor}`}>{technology.badge}</p>
                                    </div>
                                    <h1 className="text-[18px] font-bold text-[#0F172A] my-2 ">{technology.name}</h1>
                                    <p className="text-[#64748B] text-[12px] max-w-55 leading-relaxed mb-2">{technology.description}</p>
                                    <div className="flex justify-between items-center gap-8">
                                        <p className="bg-[#F1F5F9] border-[0.25px] border-slate-50 rounded-[3px] p-1">{technology.category}</p>
                                        <p>{technology.difficulty}</p>
                                        <div className="flex justify-between gap-1">
                                            <FontAwesomeIcon icon={faStar} className="h-9 w-9.8 text-[#FBBF24] text-[11px]" ></FontAwesomeIcon>
                                            <p className="text-[#334155] text-[11px] font-semibold">{technology.rating}</p>
                                        </div>
                                    </div>
                                    <button onClick={()=>handleAddStack(true)} 
                                    className={`${addStack===false?"btn btn-outline  mt-4 w-full bg-[#0A0F1D] text-[12px] text-[#ffffff] font-medium rounded-2xl":"btn btn-outline border-slate-100 mt-4 w-full bg-[#ffffff] text-[12px] text-[#cdd3e6] font-medium rounded-2xl "}`}
                                    disabled={addStack}>Add to stack
                                    </button>
                                
            </div>
        </div>
    );
};

export default TechnologyCard;