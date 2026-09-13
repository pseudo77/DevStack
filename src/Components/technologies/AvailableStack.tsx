
import type { Itechnology } from "../type/Type";
import TechnologyCard from "./TechnologyCard";




interface IavailableProps{
    technologies:Itechnology[],
    handleSelectedTechnologies:(technology:Itechnology)=>void
}

const AvailableStack = ({technologies,handleSelectedTechnologies}:IavailableProps) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10  ">
                {
                    technologies.map((technology:Itechnology)=>{
                        return (
                            <div key={technology.id} >
                                <TechnologyCard technology={technology} handleSelectedTechnologies={handleSelectedTechnologies}></TechnologyCard>
                                
                   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AvailableStack;