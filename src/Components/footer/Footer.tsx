import Image from "../../assets/logo-text.png"
import { theme } from "../type/BRAND_GRADIENT";
const Footer = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between mr-30 ">
                    <div>
                        <img className={`${theme.BRAND_GRADIENT} bg-clip-text text-transparen mb-4`} src={Image} alt="Footer" />
                        <p className="text-[#64748B] text-[14px] mb-4">Curated tools, technologies, and resources for developers building <br />
                            modern software.
                        </p>
                        <div className="flex gap-4 text-[#475569] text-[18px] font-semibold ">
                            <a href="https://github.com/" target="_blank">GitHub</a>
                            <a href="https://x.com/" target="_blank">Twitter</a>
                            <a href="https://linkedin.com/" target="_blank">Linkedin</a>
                        </div>
                    </div>
                    <div >
                        <ul className="text-[#64748B] text-[14px] space-y-2">
                            <li className="text-[#0F172A] font-bold text-[15px] ">Products</li>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#64748B] text-[14px] space-y-2" >
                            <li className="text-[#0F172A] font-bold text-[15px] ">Company</li>
                            <li>About</li>
                            <li>Contacts</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#64748B] text-[14px] space-y-2">
                            <li className="text-[#0F172A] font-bold text-[15px] ">Legal</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div className="text-slate-200 my-10 ">
                    <hr  />
                </div>
                <div className="flex justify-between text-[#64748B] text-[14px]  mb-6">
                    <h1>© 2026 Dev Stack. All rights reserved.</h1>
                    <div className="flex justify-between gap-5 items-center" >
                        <h1>Privacy</h1>
                        <h1>Terms</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;