 
import Packages from './packages'
import { BsCamera, BsCameraVideo, BsFillCameraFill, BsFillCameraVideoFill } from 'react-icons/bs'
import { AiFillCheckCircle, AiOutlineStar } from 'react-icons/ai' 
import Footer from './footer'
import { useState } from 'react' 
import { motion } from 'framer-motion'

export default function Section5({render}) {
    const [pck1, setPck1] = useState(0);
    const [pck2, setPck2] = useState(0);
    const [pck3, setPck3] = useState(0);
    const [total, setTotal] = useState(0); 
 
    const handleAdd = (packge, price) => { 
        if(Number(price) == 2000){
            setPck1(pre => Number(pre) + 1) 
        }else if(Number(price) == 3000){
            setPck2(pre => Number(pre) + 1) 
        }else if(Number(price) == 4000){
            setPck3(pre => Number(pre) + 1) 
        } 
        setTotal(pre => Number(pre) + Number(price))
    }  


    const handleSub = (price) => { 
        if(Number(price) == 2000){
            setPck1(pre => Number(pre) - 1) 
        }else if(Number(price) == 3000){
            setPck2(pre => Number(pre) - 1) 
        }else if(Number(price) == 4000){
            setPck3(pre => Number(pre) - 1) 
        } 
        setTotal(pre => Number(pre) - Number(price))
    } 

    return (
        <section className='flex h-auto md:h-screen w-screen relative flex-col'>
            <div className='w-screen h-10 bg-[#F5D061]' />
            <div className='h-5/6  w-screen flex flex-col md:flex-row transition-all '>
                <div className='w-11/12 my-5 md:w-6/12  flex justify-center flex-col items-center transition-all'>
                    <div className='w-[80%] md:w-[60%]'>
                        <div className='flex flex-col w-[full] gap-y-[20px] '>
                            <h1 className='roboto w-full drop-shadow-lg text-4xl p-3 rounded-lg bg-[#9DF3FF]'>Set Packages</h1>
                            <Packages 
                                price="2000" 
                                title="Package 1" 
                                desc="Photo only coverage" 
                                icon={<BsCamera size={50} color='black'  />} 
                                handleAdd={handleAdd}
                                handleSub={handleSub}
                                pck={pck1}
                            />
                            <Packages 
                                price="3000" 
                                title="Package 2" 
                                desc="Photo only coverage" 
                                icon={<BsCameraVideo size={50} color='black'  />} 
                                handleAdd={handleAdd}
                                handleSub={handleSub}
                                pck={pck2}
                            />
                            <Packages 
                                price="4000" 
                                title="Package 3" 
                                desc="Photo only coverage" 
                                icon={<AiOutlineStar size={50} color='black'  />} 
                                handleAdd={handleAdd}
                                handleSub={handleSub}
                                pck={pck3}
                            />
                        </div>
                    </div>
                </div> 
                <motion.div
                    
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    transition={{type: 'spring', duration: .8, damping: 99, stiffness: 99}}
                    whileInView={{opacity: [0.3, 0.6, 0.9, 1], x: 0}}
                    viewport={{once: false }}     
                    className='relative w-11/12 my-10 md:my-0 md:w-6/12  flex  items-center justify-center transition-all snap-none overflow-hidden'>
                    <div className='bg-[#9DF3FF] w-[80%]  h-auto md:overflow-y-scroll  rounded-3xl relative overflow-x-hidden' > 
                        <div className='md:overflow-hidden px-8 pt-5' >
                            <h1 className='text-2xl'>Packages:</h1> 
                            <div className='flex  w-full flex-col'  >
                                {pck1 ? (
                                    <div className='flex justify-between w-full'>
                                        <div className='flex'>
                                            <h1>x{pck1}</h1>
                                            <h1 className='ml-3'>Package 1</h1>
                                        </div>
                                        <h1>{pck1 * 2000}</h1>
                                    </div>       
                                ) : null}
                                {pck2 ? (
                                    <div className='flex justify-between w-full'>
                                        <div className='flex'>
                                            <h1>x{pck2}</h1>
                                            <h1 className='ml-3'>Package 2</h1>
                                        </div>
                                        <h1>{pck2 * 3000}</h1>
                                    </div>       
                                ) : null}
                                {pck3 ? (
                                    <div className='flex justify-between w-full'>
                                        <div className='flex'>
                                            <h1>x{pck3}</h1>
                                            <h1 className='ml-3'>Package 3</h1>
                                        </div>
                                        <h1>{pck3 * 4000}</h1>
                                    </div>       
                                ) : null}    
                            </div>   
                        </div>
                        <div className='px-8'>
                            <div className='flex justify-between'>        
                                <h1 className='text-3xl text-gray-800'>Total</h1>
                                {total && <h1 className='text-3xl font-bold'>₱ {total}</h1>}
                            </div> 
                            <h1 className='text-md font-bold   uppercase'>Save my Package</h1>
                            <div className='relative w-full bg-fuchsia-300 h-4/5 '>        
                                <input type='email' className='peer w-full absolute top-0 invalid:outline-red-700 left-0 py-2 mt-2 px-4 drop-shadow-md focus:outline outline-gray-700' placeholder='Email' />
                                <AiFillCheckCircle size={30} className='absolute right-1 top-3 peer-invalid:text-red-600' />
                            </div>
                            <button className='mt-16  mb-4 text-center w-full text-outline hover:drop-shadow-md cursor-pointer transition-all hover:scale-[1.1] '>Pick me up</button>
                        </div> 
                    </div> 
                </motion.div>  
            </div> 
            <Footer render={render} />
        </section>
    )
}
