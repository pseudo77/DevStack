import { use, useState } from "react";
import type { Itechnology } from "../type/Type";
import AvailableStack from "./AvailableStack";
import SelectedStack from "./SelectedStack";

interface ItechnologyProps{
    promise:Promise<Itechnology[]>
}

const Technologies = ({promise}:ItechnologyProps) => {
    const technologies=use(promise)
    console.log(technologies)
    const [selectedTechno, setSelectedTechno]=useState<number>(0)
    const handleSelectedTechno=()=>{
        let count=selectedTechno+1;
        setSelectedTechno(count)
    }
    return (
        <div>
            <div className="container mx-auto leading-12 ">
                <h1 className="font-extrabold text-[36px]  tracking-[-0.9px]">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">Technologies</span></h1>
                <h2 className="text-[16px] text-[#64748B] ">Pick one technology per category to build your ideal stack.</h2>
                <div className="flex justify-between gap-40" >
                    
                    <AvailableStack technologies={technologies} handleSelectedTechno={handleSelectedTechno}></AvailableStack>
                    <SelectedStack selectedTechno={selectedTechno} technologies={technologies}></SelectedStack>

                </div>
            </div>
            
        </div>
    );
};

export default Technologies;