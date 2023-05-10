 
import { Header, Section2, Section3, Section4, Section5, Section6 } from "@/components"
import Image from "next/image"   
import { useState } from "react"
import { motion } from 'framer-motion' 
import Head from "next/head"
import Footer from "@/components/footer"
import ReactModal from "react-modal"
import { BsEmojiDizzyFill, BsEmojiFrownFill, BsEmojiExpressionlessFill, BsEmojiSmileFill, BsEmojiHeartEyesFill, BsEmojiDizzy, BsEmojiLaughing, BsEmojiSmile, BsEmojiExpressionless, BsEmojiFrown } from 'react-icons/bs'

export default function Home() {    
  const [render, setRender] = useState(0); 
  const [isOpen, setIsOpen] = useState(false);
  
  function closeModal() {
    setIsOpen(false);
  }

  function handelModal(){
    setIsOpen(true);
  }

  return ( 
    <> 
      {/* MODAL */}

      <div  
        className='h-screen overflow-hidden    w-screen scroll-smooth relative ' 
        id="container" 
        onClick={() => {
          setRender(render => render + 1)
        }} 
      >
        <div className="h-full w-full relative overflow-y-scroll overflow-x-hidden">
        
          <Head>
            <link rel="icon" href="/logo.svg"   />
            <title className="sacramento">Light and Focus</title>
          </Head>
          {/* BACKGROUND MUSIC */}
          <audio  id='bgMusic' controls className="invisible absolute" loop  src="/sfx/bg.mp3"  />  
          
          {/* HEADER */}
          <Header />   

          {/* SECTION 1 */}
          <div>
            <section className="h-auto md:py-32 w-screen flex items-center justify-evenly flex-col md:flex-row" >
              <div className="relative w-10/12 md:min-w-[300px] md:max-w-[400px]  md:max-h-[400px] sm:w-10/12 md:w-3/12 overflow-hidden rounded-3xl hover:shadow-md h-96 m-5 transition-all duration-500">
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
                  onViewportEnter={() => render ? document.getElementById('bgMusic').pause() : null} 
                  onViewportLeave={() => render ? document.getElementById('bgMusic').play() : null}
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

          {/* SECTION 5 */} 
          <Section5/>  
          
          
          <ReactModal   
            portalClassName='md:w-[50%] w-[80%]'
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.80)', 
              },
              content: {    
                top: '50%',
                left: '50%',
                right: 'auto', 
                bottom: 'auto', 
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
              }
            }}
          >
            <div className="md:p-10 space-y-5">
              <h1 className="sacramento text-xl font-bold tracking-wider md:text-5xl text-center ">Thank you for messaging us!</h1>
              <hr />
              <h1 className="text-xl roboto ">Rate us: </h1>
              <div className="flex space-x-5 justify-evenly mt-5">
                <BsEmojiDizzy color="gray"  className="hover:fill-[red] hover:cursor-pointer hover:scale-125 transition-all text-2xl md:text-3xl" />
                <BsEmojiFrown color="gray"  className="hover:fill-[orange] hover:cursor-pointer hover:scale-125 transition-all text-2xl md:text-3xl"  />
                <BsEmojiExpressionless color="gray"  className="hover:fill-[yellow] hover:cursor-pointer hover:scale-125 transition-all text-2xl md:text-3xl"  />
                <BsEmojiSmile color="gray"  className="hover:fill-[yellowgreen] hover:cursor-pointer hover:scale-125 transition-all text-2xl md:text-3xl"  />
                <BsEmojiLaughing color="gray"  className="hover:fill-[green] hover:cursor-pointer hover:scale-125 transition-all text-2xl md:text-3xl"  />
              </div>
            </div>
          </ReactModal>

          {/* SECTION 6 */} 
          <Section6  render={render} handleClick={handelModal} />  
          
          <Footer render={render} />
        </div>
      </div>
    </>
  )
}

 