import { BsFacebook } from "react-icons/bs"
import { FaTiktok } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from 'react-icons/md'
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function Footer({render}) {

    const router = useRouter()

    return (
        <motion.div 
         
            viewport={{once: false}}
            onViewportEnter={() => render ? document.getElementById('bgMusic').pause() :  null}  
        
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
                <div className="flex gap pl-4 md:gap-5 mt-5 md:mt-2 justify-evenly md:justify-normal  w-full ">
                    <div className="relative">
                        <BsFacebook  
                            size={35}
                            className="peer cursor-pointer text-2xl hover:text-white transition-all duration-300" 
                            onClick={() => router.push('https://www.facebook.com')}
                        />
                        <Link 
                            href="https://www.facebook.com"
                            target="_blank"
                            className="peer-hover:visible absolute peer-hover:delay-200 invisible left-full -top-6 bg-opacity-50 text-white bg-black min-w-[200px] px-4 transition-all"
                        >
                        https://www.facebook.com/
                        </Link>
                    </div>    
                    <div className="relative">
                        <FaTiktok  
                            size={35}
                            className="peer cursor-pointer text-2xl hover:text-white transition-all duration-300" 
                            onClick={() => router.push('https://www.tiktok.com')}
                        />
                        <Link 
                            href="https://www.tiktok.com"
                            target="_blank"
                            className="peer-hover:visible absolute peer-hover:delay-200 invisible left-full -top-6 bg-opacity-50 text-white bg-black min-w-[200px] rounded-md px-4 transition-all"
                        >
                        https://www.tiktok.com/
                        </Link>
                    </div>    
                    <div className="relative">
                        <AiFillInstagram  
                            size={35}
                            className="peer cursor-pointer text-2xl hover:text-white hover:drop-shadow-md  transition-all duration-300" 
                            onClick={() => router.push('https://www.instagram.com')}
                        />
                        <Link 
                            href="https://www.instagram.com"
                            target="_blank"
                            className="peer-hover:visible rounded-md absolute peer-hover:delay-200 invisible right-1 md:left-full -top-6 bg-opacity-50 text-white bg-black min-w-[230px] px-4 transition-all"
                        >
                        https://www.instagram.com/
                        </Link>
                    </div>    
                    <div className="relative">
                        <MdEmail  
                            size={37}
                            className="peer cursor-pointer text-2xl hover:text-white transition-all duration-300" 
                            onClick={() => router.push('https://www.gmail.com')}
                        />
                        <Link 
                            href="https://www.gmail.com"
                            target="_blank"
                            className="peer-hover:visible absolute rounded-md peer-hover:delay-200 invisible md:left-full right-1 -top-6 bg-opacity-50 text-white bg-black min-w-[200px] px-4 transition-all"
                        >
                        https://www.gmail.com/
                        </Link>
                    </div>    
                   
                </div>
            </div>
            <div  className="flex md:items-end pb-3 md:pb-0 justify-center  md:justify-end  md:pr-10 text-lg w-screen mt-10  md:w-6/12">
                <p className="md:text-right mr-11 text-center">copy right 2023</p>
            </div>
        </motion.div>
    )
}
