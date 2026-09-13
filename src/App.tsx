
import { Suspense, useState } from "react"
import Hero from "./Components/hero/Hero"
import NavBar from "./Components/navBar/NavBar"
import Technologies from "./Components/technologies/Technologies"
import type { Itechnology } from "./Components/type/Type"
import Footer from "./Components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"


function App() {
  const PromisData=async():Promise<Itechnology[]>=>{
    const response=await fetch("/data.json")
    const data=await response.json()
    return data;
  }
  const [promise]=useState(()=>PromisData())
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Suspense fallback={<div className="flex items-center justify-center gap-2">
        <h1 className="text-9xl">Loading...</h1>
        <FontAwesomeIcon className="text-9xl" icon={faSpinner} spin></FontAwesomeIcon>
      </div>}>
        <Technologies promise={promise}></Technologies>
      </Suspense>
      <div className="my-20">
        <hr className="text-slate-100" />
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
