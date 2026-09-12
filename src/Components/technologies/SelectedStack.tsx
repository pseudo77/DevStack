
import type { Itechnology } from "../type/Type";
import SelectedCard from "./SelectedCard";


interface IselectedProps{
    selectedTechnologies:Itechnology[],
    handleRemoveStack:(selected:Itechnology)=>void,
    handleAllRemoveStack:()=>void
}

const SelectedStack = ({selectedTechnologies,handleRemoveStack, handleAllRemoveStack}:IselectedProps) => {
    if(selectedTechnologies.length===0){
        return (
            <div >
                <div className="border border-slate-100 h-auto rounded-2xl p-8">
                    <h1 className="font-bold text-[32px] text-[#0F172A] ">Your Stack</h1>
                    <h2 className="font-regular text-[20px] text-[#94A3B8] mb-4 ">No technologies selected yet</h2>
                    <button className="p-5 w-full text-[#94A3B8] text-[12px] bg-[#E2E8F0] font-normal border border-slate-100 rounded-xl ">Your stack is empty</button>
                </div>
            </div>
        )
    }
    return (
        <div>
               <div className="border border-slate-100 h-auto rounded-lg ">
                    <div className="p-8">
                        <h1 className="font-bold text-[32px] text-[#0F172A] ">Your Stack</h1>
                        <h2 className="font-regular text-[20px] text-[#94A3B8] mb-4 ">{selectedTechnologies.length} Technology Selected</h2>
                        <div>
                            {
                                selectedTechnologies.map((selected:Itechnology)=>{
                                    return (
                                        <SelectedCard key={selected.id} selected={selected} handleRemoveStack={handleRemoveStack}  ></SelectedCard>
                                    )
                                })
                            }
                        </div>
                        <button onClick={()=>handleAllRemoveStack()} className="w-full border border-[#ED8C85] rounded-lg text-[#D82C20] text-[20px] font-semibold mt-12">Remove All</button>
                    </div>
               </div>   
        </div>
    );
};

export default SelectedStack;