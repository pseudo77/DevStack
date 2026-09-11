import type { Itechnology } from "../type/Type";
interface IavailableProps{
    technologies:Itechnology[]
}

const AvailableStack = ({technologies}:IavailableProps) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 ">
                {
                    technologies.map((technology:Itechnology)=>{
                        return (
                            <div className="border border-slate-200 rounded-2xl w-[288px] h-71.25 p-5 leading-tight">
                                
                                    <div className="flex justify-between items-center">
                                    <img className=" w-12 h-12 object-cover object-top rounded-2xl" src={technology.icon} alt="" />
                                    <p>{technology.badge}</p>
                                    </div>
                                    <h1>{technology.name}</h1>
                                    <p>{technology.description}</p>
                                    <div>
                                        <p>{technology.category}</p>
                                        <p>{technology.difficulty}</p>
                                        <p>{technology.rating}</p>
                                    </div>
                                    <button>Add to stack</button>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AvailableStack;