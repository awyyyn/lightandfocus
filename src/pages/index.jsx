 
import { Header, Section2, Section3, Section4, Section5, Section6 } from "@/components"
import Image from "next/image"   
import { useState } from "react"
import { motion } from 'framer-motion' 
import Head from "next/head"
import Footer from "@/components/footer"
import ReactModal from "react-modal"
import { BsEmojiDizzy, BsEmojiLaughing, BsEmojiSmile, BsEmojiExpressionless, BsEmojiFrown } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

export default function Home() {    
  const [render, setRender] = useState(0); 
  const [isOpen, setIsOpen] = useState(false);
  const [rateModal, setRateModal] = useState(false);
  const [rate, setRate] = useState(0);
  const [email, setEmail] = useState('');
  
  function closeModal() {
    setIsOpen(false);
    setTimeout(() => {
      setRateModal(true)
    }, 3000);
  }

  const handleSubmitRate = async() => {     
    await emailjs.send("service_zmtzrrk","template_x17dqdj", {from_name: email, message: `${rate}`}, 'P4FGVzA6fybtNadqF').catch((err) => alert("Email Service or Network Error"));
    setRateModal(false);
    setEmail('');
    setRate(0);
  }

  function handleRate(rate) {
    setRate(rate);
  }

  function handelModal(){
    setIsOpen(true);
  }

  return (  
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
          <div className="md:p-5 space-y-10">
            <h1 className="sacramento text-xl font-bold tracking-wider md:text-5xl text-center ">Thank you for messaging us!</h1>
             <button className="text-center w-full hover:bg-black hover:bg-opacity-10 py-2" onClick={closeModal}>Close</button>
          </div>
        </ReactModal>

        <ReactModal   
          portalClassName='md:w-[50%] w-[100vw]' 
          isOpen={rateModal}
          onRequestClose={() =>{ 
            setRateModal(false);
            setRate(0)
          }}
          ariaHideApp={false}
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
          <div className="md:p-5 md:space-y-10 space-y-8 ">
            <h1 className="sacramento text-3xl font-bold tracking-wider md:text-5xl text-center ">Rate us!</h1>
            <div>
              <input type="email" className="shadow-lg w-full px-3 py-2 text-xl text-center invalid:focus:outline-red-500 invalid:border-red-500 invalid:border invalid:focus:border-0" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex justify-evenly">
              <BsEmojiDizzy className={`transition-all  ${rate == 1 ? 'text-[red] scale-125' : 'hover:cursor-pointer hover:scale-125 hover:text-[red] '} text-4xl  `} onClick={() => handleRate(1)} />
              <BsEmojiFrown className={`transition-all  ${rate == 2 ? 'text-[orange] scale-125' : 'hover:text-[orange] hover:scale-125 hover:cursor-pointer'} text-4xl  `} onClick={() => handleRate(2)} />
              <BsEmojiExpressionless className={`transition-all ${rate == 3 ? 'text-[#e8ce0d] scale-125' : 'hover:cursor-pointer hover:scale-125 hover:text-[#e8ce0d]'  }  text-4xl `} onClick={() => handleRate(3)} />
              <BsEmojiSmile className={`transition-all ${rate == 4 ? 'scale-125 text-[yellowgreen]' : 'hover:cursor-pointer hover:scale-125 hover:text-[yellowgreen]'}   text-4xl `} onClick={() => handleRate(4)} />
              <BsEmojiLaughing className={`transition-all ${rate == 5 ? 'text-[green] scale-125' : 'hover:cursor-pointer hover:scale-125 hover:text-[green]'}  text-4xl   `} onClick={() => handleRate(5)} />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <button className="text-center w-full hover:bg-[#F5D061] bg-[#F5D061] bg-opacity-20 hover:bg-opacity-80 py-2  font-medium" onClick={handleSubmitRate}>Send rate</button>
              <button  
                className="hover:bg-blue-300 bg-blue-300 bg-opacity-20 py-2 hover:bg-opacity-80" 
                onClick={() => {
                  setRateModal(false);
                  setRate(0)
                }}
              >
                close
              </button>
            </div>
          </div>
        </ReactModal>
        
        {/* SECTION 6 */} 
        <Section6  render={render} handleClick={handelModal} />  
        
        <Footer render={render} />
      </div>
    </div> 
  )
}

 