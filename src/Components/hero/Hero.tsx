import HeroImage from "../../assets/banner-stack.png"
import { theme } from "../type/Type";


const Hero = () => {
    return (
        <div>
            <div className="container mx-auto px-5 md:px-8
                            flex flex-col md:flex-row
                            justify-between
                            mt-20 items-center "> 
                <div className="max-w-135">
                    <h1 className="max-md:text-center text-[30px] md:text-[60px] leading-tight tracking-[-1.5px]"><span className=" text-[#0F172A] font-extrabold leading-none ">Build Your Ideal <br /></span>
                    <span className={` ${theme.brandGradient}  bg-clip-text text-transparent`}>Development Stack</span></h1>
                    <p className="max-md:text-center my-4 mb-12 pr-2 text-[14px] max-md:line-clamp-4 md:text-[18px] leading-7.25">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="flex gap-2 "> 
                        <button className={`btn  w-42 rounded-md font-semibold text-[#FFFFFF] text-[12px] md:text-[14px] ${theme.brandGradient}`} >Explore Technologies</button>
                        <button className="btn btn-outline w-42 rounded-md text-[#374151] text-[12px] md:text-[14px] font-semibold">Learn More</button>
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