import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
  useGSAP(()=>{
    gsap.to('#title',{
      y:0,
      opacity:1,
    })
    gsap.to('.link',{
      y:0,
      opacity:1,
      duration:1,
      stagger:0.25
    })
  },[])
  return (
    <section id="highlights" className="w-full h-full overflow-hidden bg-zinc common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the hightligths</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the film <img src={watchImg} alt="watch" className="ml-2" /></p>
            <p className="link">Watch the event <img src={rightImg} alt="watch" className="ml-2" /></p>
          </div>
        </div>

        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights