import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { Itechnology } from "../type/Type";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";


interface IcardProps{
    technology:Itechnology
    handleSelectedTechnologies:(technology:Itechnology)=>void
}

const TechnologyCard = ({technology, handleSelectedTechnologies}:IcardProps) => {
    const [addStack, setAddStack]=useState<boolean>(false)
            type add=true|false
            const handleAddStack=(value:add)=>{
                setAddStack(value)
                handleSelectedTechnologies(technology)
                toast.success('Item Added to Stack', {
                position: "top-center",
                autoClose: 2000,
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
            <div className="flex flex-col border border-slate-200 rounded-2xl max-w-[333.05px] h-full p-5 leading-tight max-md:space-y-3">
                                
                                    <div className="flex justify-between items-center">
                                        <img className=" w-12 h-12 object-cover object-top rounded-2xl" src={technology.icon} alt="" />
                                        <p className={`${technology.badgeColor}`}>{technology.badge}</p>
                                    </div>
                                    <h1 className="max-md:hidden text-[18px] font-bold text-[#0F172A] my-2 ">{technology.name}</h1>
                                    <p className="max-md:text-left text-[#64748B] text-[12px] max-w-55 leading-relaxed mb-2 line-clamp-3">{technology.description}</p>
                                    <div className="text-[11px]  flex justify-between items-center gap-8">
                                        <p className="bg-[#F1F5F9] border-[0.25px] border-slate-50 rounded-[3px] p-1">{technology.category}</p>
                                        <p >{technology.difficulty}</p>
                                        <div className="flex justify-between gap-1">
                                            <FontAwesomeIcon icon={faStar} className="h-9 w-9.8 text-[#FBBF24] text-[11px]" ></FontAwesomeIcon>
                                            <p className="text-[#334155] text-[11px] font-semibold">{technology.rating}</p>
                                        </div>
                                    </div>
                                    <button onClick={()=>handleAddStack(true)} 
                                    className={`${addStack===false?"btn btn-outline  mt-4 w-full  bg-[#0A0F1D] text-[12px] text-[#ffffff] font-medium rounded-2xl":"btn btn-outline border-slate-100 mt-4 w-full bg-[#ffffff] text-[12px] text-[#cdd3e6] font-medium rounded-2xl "}`}
                                    disabled={addStack}>{addStack===true?"✓ Added to Stack":"Add to Stack"}
                                    </button>
                                
            </div>
        </div>
    );
};

export default TechnologyCard;