
import { Suspense, useState } from "react"
import Hero from "./Components/hero/Hero"
import NavBar from "./Components/navBar/NavBar"
import Technologies from "./Components/technologies/Technologies"
import type { Itechnology } from "./Components/type/Type"

function App() {
  const PromisData=async():Promise<Itechnology[]>=>{
    const response=await fetch("/public/data.json")
    const data=await response.json()
    return data;
  }
  const [promise]=useState(()=>PromisData())
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Suspense fallback={<h1>Loading</h1>}>
        <Technologies promise={promise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
