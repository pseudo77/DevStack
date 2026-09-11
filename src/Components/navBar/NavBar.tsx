import Image from "../../assets/logo-text.png"
function NavBar(){
    return (
        <div>
            <div className="flex justify-between container mx-auto mt-5 align-middle items-center">
                <div>
                    <img src={Image} alt="" />
                </div>
                <div className="flex justify-between gap-6">
                    <h1 className="text-[#DB2777]">Home</h1>
                    <h1>Technologies</h1>
                    <h1>Projects</h1>
                    <h1>About</h1>
                    <h1>Contacts</h1>
                </div>
                <div className="flex justify-between align-middle items-center gap-5">
                    <h1>Sign In</h1>
                    <button className="btn btn-secondary rounded-3xl">Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default NavBar