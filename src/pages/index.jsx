 
import { Header, Section2, Section3, Section4, Section5 } from "@/components"
import Image from "next/image"   
import { useEffect, useRef, useState } from "react"
import { motion, useInView } from 'framer-motion'
import { Router, useRouter } from "next/router"
import Head from "next/head"

export default function Home() {    
  const [render, setRender] = useState(0); 

  console.log(render)
  return ( 
    <div  
      className='h-screen w-screen scroll-smooth' 
      id="container" 
      
      onClick={() => {
        setRender(render => render + 1)
      }} 
    >
      <Head>
        <link rel="icon" href="/logo.svg"   />
        <title className="sacramento">Light and Focus</title>
      </Head>
      <audio  id='bgMusic' controls className="invisible absolute" loop  src="/sfx/bg.mp3" onPlaying={() => console.log('playing')}  /> 

      <Header />   
      <div>
        <section className="h-[83vh] w-screen flex items-center justify-evenly flex-col md:flex-row" >
          <div className="relative w-10/12 sm:w-10/12 md:h-[400px] md:w-3/12 overflow-hidden rounded-3xl hover:shadow-md h-96 m-5 transition-all duration-500">
            <Image  
              className="image1"
              color="black" 
              alt="logo"
              fill
              src='/image1.png'
            /> 
          </div>
          <div   className="flex flex-col flex-wrap md:w-5/12 w-10/12 items-center" > 
            <motion.div 
              viewport={{once: false}}
              onViewportEnter={() => render ? document.getElementById('bgMusic').pause() : console.log('false')} 
              onViewportLeave={() => render ? document.getElementById('bgMusic').play() : console.log('false')}
            >
            <h1 className="sacramento text-4xl text-center" >Welcome to Light and Focus</h1>
            </motion.div>
            <p className="text-clip overflow-hidden text-justify leading-7 tracking-wider">
              Is in focus if light from object points has been converged nearly as much as possible in the image, and out of focus if light has not been well converged. The border between these is sometimes defined by a “circle of confusion “ criterion which allows us to convey information and more importantly, emotion in an image.
            </p>
          </div>
        </section>
      </div>

      <div>
        {/* SECTION 2 */}
        <Section2 />

        {/* SECTION 3 */}
        <Section3 />
      </div>

      {/* SECTION 4 */} 
      <Section4  />  
      {/* SECTION 4 */} 
      <Section5 render={render} />  
    </div>
  )
}

 