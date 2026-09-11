
import type { Itechnology } from "../type/Type";
import TechnologyCard from "./TechnologyCard";




interface IavailableProps{
    technologies:Itechnology[]
    handleSelectedTechno:()=>void;
}

const AvailableStack = ({technologies,handleSelectedTechno}:IavailableProps) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 roun ">
                {
                    technologies.map((technology:Itechnology)=>{
                        return (
                            <div key={technology.id} >
                                <TechnologyCard technology={technology} handleSelectedTechno={handleSelectedTechno}></TechnologyCard>
                                
                   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AvailableStack;