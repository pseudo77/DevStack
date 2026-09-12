import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../../assets/logo-text.png"
import { theme } from "../type/BRAND_GRADIENT"
import { faBars } from "@fortawesome/free-solid-svg-icons"
function NavBar(){
    return (
        <div className="sticky top-5 z-50 ">
            <div className="hidden md:flex justify-between container mx-auto mt-5 mb-10 align-middle items-center">
                <div>
                    <img className={`${theme.BRAND_GRADIENT} bg-clip-text text-transparent`} src={Image} alt="BrandName" />
                </div>
                <div className="flex justify-between gap-6">
                    <a href="#" className="text-[#DB2777]">Home</a>
                    <a href="#">Technologies</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                </div>
                <div className="flex justify-between align-middle items-center gap-5">
                    <button className=" cursor-pointer">Sign In</button>
                    <button className={`btn rounded-full ${theme.BRAND_GRADIENT}`}>Sign Up</button>
                </div>
            </div>
            <div className="flex md:hidden justify-between container mx-auto mt-5 align-middle items-center">
                <div>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                <img src={Image} alt="Name" />
                <div className="flex justify-between align-middle items-center gap-5">
                    <button className=" cursor-pointer">Sign In</button>
                    <button className={`btn rounded-full ${theme.BRAND_GRADIENT}`}>Sign Up</button>
                </div>
            </div>
            <div><hr className="text-slate-100"/></div>
        </div>
    )
}
export default NavBar