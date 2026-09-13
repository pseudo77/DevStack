import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../../assets/logo-text.png"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { theme } from "../type/Type"

function NavBar(){
    return (
        <div className="container mx-auto  px-5 md:px-8 sticky top-0 z-50 bg-[#ffffff]">

    {/* Responsive Part for PC Users Starts */}
            <div className="hidden md:flex justify-between container mx-auto mt-5 mb-10 align-middle items-center">
                <div> 
                    <img src={Image} alt="BrandName" />
                </div>
                <div className="flex justify-between gap-6 text-[16px] font-medium text-[#475569]">
                    <a href="#" className="text-[#DB2777] font-semibold">Home</a>
                    <a href="#" className="text">Technologies</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                </div>
                <div className="flex justify-between align-middle items-center gap-5">
                    <button className=" cursor-pointer text-[9px] md:text-[16px] text-[#4B5563] font-bold ">Sign In</button>
                    <button className={`btn rounded-full ${theme.brandGradient} text-[9px] md:text-[16px] text-[#FFFFFF] font-semibold `}>Sign Up</button>
                </div>
            </div>
    {/* Responsive Part for PC Users Ends */}

    {/* Responsive Part For Mobile Users Starts*/}
            <div className="md:hidden flex justify-between container mx-auto mt-5 align-middle items-center">
                <div>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                
                    <img className="mx-auto" src={Image} alt="Name" />
                    <div className="flex justify-between align-middle items-center gap-1">
                        <button className=" cursor-pointer text-[9px] text-[#4B5563] font-bold ">Sign In</button>
                        <button className={`btn rounded-full ${theme.brandGradient} text-[9px] text-[#FFFFFF] font-semibold  `}>Sign Up</button>
                    </div>
                
            </div>
    {/* Responsive Part for Mobile Users Ends */}
            <div><hr className="text-slate-100"/></div>
        </div>
    )
}
export default NavBar