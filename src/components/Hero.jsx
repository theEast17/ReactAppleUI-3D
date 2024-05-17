import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"


const Hero = () => {

  const [videoSrc,setVideoSrc]=useState(window.innerWidth<760?smallHeroVideo:heroVideo)
  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      delay:2
    })
    gsap.to('#cta',{
      opacity:1,
      y:-50,
      delay:2
    })
  },[])

 const videoSetFunction=()=>{
    if(window.innerWidth<760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }
 

  useEffect(()=>{
    window.addEventListener('resize',videoSetFunction)
    return ()=> window.removeEventListener('resize',videoSetFunction)
  },[])

  return (
    <section className="w-full bg-black nav-height relative">
      <div className="w-full h-5/6 flex-center flex-col">
        <p id="title" className="hero-title">iPhone15 Pro</p>
        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" autoPlay muted key={videoSrc} playsInline={true}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/ month or $999</p>
      </div>

    </section>
  )
}

export default Hero