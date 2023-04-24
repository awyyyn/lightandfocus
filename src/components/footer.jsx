import { BsFacebook } from "react-icons/bs"
import { FaTiktok } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from 'react-icons/md'
import { useRouter } from "next/router";
import { motion } from 'framer-motion'

export default function Footer({render}) {

    const router = useRouter()

    return (
        <motion.div 
         
            viewport={{once: false}}
            onViewportEnter={() => render ? document.getElementById('bgMusic').pause() : console.log('false')} 
            onViewportLeave={() => render ? document.getElementById('bgMusic').play() : console.log('false')}
        
           /*  initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y:0 }}
            transition={{
                // delay: 2,        
                duration: 1,
                type: 'keyframes',
                ease: 'easeInOut'
            }} */
            // viewport={{once: false}}
            className='bg-[#F5D061] w-screen h-auto p-1 md:p-5 flex flex-col md:flex-row justify-center md:justify-between '
        >
            <div className="flex flex-col   md:pl-10 w-screen md:w-6/12 ">
                <h1 className="text-2xl pl-4 pt-4 self-start ">Contact us:</h1>
                <div className="flex gap md:gap-5 mt-5 md:mt-2 justify-evenly md:justify-normal  w-full ">
                    <BsFacebook  
                        size={35}
                        className="cursor-pointer text-2xl hover:text-white" 
                        onClick={() => router.push('https://www.facebook.com')}
                    />
                    <FaTiktok  
                        size={35}
                        className="cursor-pointer hover:text-white" 
                        onClick={() => router.push('https://www.titkok.com')}
                    />
                    <AiFillInstagram
                        size={35}  
                        className="cursor-pointer hover:text-white" 
                        onClick={() => router.push('https://www.instagram.com')}
                    />
                    <MdEmail
                        size={35}  
                        className="cursor-pointer hover:text-white" 
                        onClick={() => router.push('https://www.gmail.com')}
                    />
                </div>
            </div>
            <div  className="flex md:items-end pb-3 md:pb-0 justify-center  md:justify-end  md:pr-10 text-lg w-screen mt-10  md:w-6/12">
                <p className="text-right mr-11">copy right 2023</p>
            </div>
        </motion.div>
    )
}
