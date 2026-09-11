import type { Itechnology } from "../type/Type";

interface IselectedProps{
    selectedTechno:number,
    technologies:Itechnology[]
}

const SelectedStack = ({selectedTechno, technologies}:IselectedProps) => {
    return (
        <div>
            {technologies.map((technology:Itechnology)=>
                <div className="border border-slate-100 rounded-2xl w-auto h-auto">
                <div className="p-2">
                    <h1>Your Stack</h1>
                    <h2>2 Technology Selected</h2>
                    <div>
                        <img src={technology.icon} alt="" />
                        <div>
                            <h1>{technology.name} </h1>
                            <h2>{technology.category} </h2>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                    <button>Remove All</button>
                    </div>
            </div>
            )}
        </div>
    );
};

export default SelectedStack;