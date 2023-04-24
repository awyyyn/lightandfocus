import Image from "next/image"
import  { motion } from 'framer-motion'

export default function header() {
    return (
        <header >
            <div className="bg-[#F5D061] h-[17vh] md:h-[20vh] flex justify-center items-center transition-all relative"> 
            <div className="absolute left-5 top-13 md:top-[13] hidden md:block transition-all">
                <div className="w-44 h-20  md:h-10 flex  relative items-center" >
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
                <h1 className="flex self-center absolute mt-[8vh] md:mt-[11vh] text-[10px] md:text-sm transition-all">Treasure and capture the moment</h1>
            </div>
            </div>
        </header>
    )
}
