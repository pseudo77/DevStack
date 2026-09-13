import HeroImage from "../../assets/banner-stack.png"
import { theme } from "../type/Type";


const Hero = () => {
    return (
        <div>
            <div className="flex justify-between container mx-auto mt-20 items-center "> 
                <div className="max-w-135">
                    <h1 className="leading-tight tracking-[-1.5px]"><span className="text-[60px] text-[#0F172A] font-extrabold leading-none ">Build Your Ideal <br /></span>
                    <span className={`text-[60px] ${theme.brandGradient}  bg-clip-text text-transparent`}>Development Stack</span></h1>
                    <p className="my-4 mb-12 text-[18px] leading-7.25">Explore frontend, backend, database, and tooling options,<br/>
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="flex gap-2 "> 
                        <button className={`btn  w-42 rounded-md font-semibold text-[#FFFFFF] text-[14px] ${theme.brandGradient}`} >Explore Technologies</button>
                        <button className="btn btn-outline w-42 rounded-md text-[#374151] text-[14px] font-semibold">Learn More</button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="" />
                </div>

                
            </div>
        </div>
    );
};

export default Hero;