import Image from "../../assets/logo-text.png"


const Footer = () => {
    return (
        <div>
            <div className="container max-md:text-center mx-auto px-5 md:px-8">
                <div className="  flex  justify-between lg:mr-30  ">
                    <div className="space-y-5 md:space-y-4">
                        <img className="max-md:mx-auto" src={Image} alt="Footer" />
                        <p className="text-[#64748B] max-md:text-[12px] md:line-clamp-2 md:max-w-70 lg:max-w-94.25 text-[14px] mb-4">Curated tools, technologies, and resources for developers building 
                            modern software.
                        </p>
                        
                        <ul className="max-md:list-disc flex max-md:justify-center gap-8 text-[#475569] max-md:text-[12px] text-[18px] font-semibold ">
                                <li><a href="https://github.com/" target="_blank">GitHub</a></li>
                                <li><a href="https://x.com/" target="_blank">Twitter</a></li>
                                <li><a href="https://linkedin.com/" target="_blank">Linkedin</a></li>
                        </ul>
                        
                    </div>
                    <div className="max-md:hidden">
                        <ul className="text-[#64748B] text-[14px] space-y-2">
                            <li className="text-[#0F172A] font-bold text-[15px] "><a href="#">Products</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div >
                    <div className="max-md:hidden">
                        <ul className="text-[#64748B] text-[14px] space-y-2" >
                            <li className="text-[#0F172A] font-bold text-[15px] "><a href="#">Company</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="Contacts"></a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="max-md:hidden">
                        <ul className="text-[#64748B] text-[14px] space-y-2">
                            <li className="text-[#0F172A] font-bold text-[15px] "><a href="#">Legal</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-slate-200 my-10 ">
                    <hr  />
                </div>
                <div className="max-md:mx-auto flex justify-between text-[#64748B] max-md:text-[11px] text-[14px]  mb-6">
                    <h1>© 2026 Dev Stack. All rights reserved.</h1>
                    <ul className="flex justify-between max-md:gap-2 gap-5 items-center">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;