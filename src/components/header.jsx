import Image from "next/image"
import  { motion } from 'framer-motion'

export default function header() {
    return (
        <header >
            <div className="bg-[#F5D061]  py-2 md:h-auto md:py-4 flex justify-center items-center transition-all relative "> 
            <div className="absolute left-5 top-13  hidden sm:block transition-all">
                <div className="md:w-52 md:h-[46px] lg:h-[46px] h-10 w-44 flex  relative items-center" >
                    <Image  
                        color="black" 
                        alt="logo"
                        fill
                        src='/logo.png'
                    /> 
                </div>
            </div>
            <div className="flex flex-col h-fit transition-all">
                <h1 className="sacramento text-[50px] md:text-[70px] transition-all">Light and Focus</h1>
                <h1 className="flex self-center -mt-5 pb-2 min-[320px] text-black  text-[10px] md:text-sm transition-all ">Treasure and capture the moment</h1>
            </div>
            </div>
        </header>
    )
}
    