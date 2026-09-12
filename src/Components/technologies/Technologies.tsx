
import { use, useState } from "react";
import type { Itechnology } from "../type/Type";
import AvailableStack from "./AvailableStack";
import SelectedStack from "./SelectedStack";

interface ItechnologyProps{
    promise:Promise<Itechnology[]>
}

const Technologies = ({promise}:ItechnologyProps) => {
    const technologies=use(promise)
    

    const [selectedTechnologies,setSelectedTechnologies]=useState<Itechnology[]>([]);

    const handleSelectedTechnologies=((technology:Itechnology)=>{
            setSelectedTechnologies([...selectedTechnologies,technology])
    })

    const handleRemoveStack=((selected:Itechnology)=>{
        const restStacks=selectedTechnologies.filter(stack=>stack.name!==selected.name);
        setSelectedTechnologies(restStacks)
    })
    const handleAllRemoveStack=()=>{
        setSelectedTechnologies([])
    }
    
    return (
        <div>
            <div className="container mx-auto leading-12 ">
                <h1 className="font-extrabold text-[36px]  tracking-[-0.9px]">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">Technologies</span></h1>
                <h2 className="text-[16px] text-[#64748B] ">Pick one technology per category to build your ideal stack.</h2>
                <div className="flex  gap-10" >
                    
                    <AvailableStack technologies={technologies} handleSelectedTechnologies={handleSelectedTechnologies} ></AvailableStack>
                    <SelectedStack selectedTechnologies={selectedTechnologies} handleRemoveStack={handleRemoveStack} handleAllRemoveStack={handleAllRemoveStack} ></SelectedStack>

                </div>
            </div>
            
        </div>
    );
};

export default Technologies;