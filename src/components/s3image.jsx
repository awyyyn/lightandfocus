import Image from 'next/image'
import { motion } from 'framer-motion'

export default function S3image({path}) {
    return (
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: false}} 
            transition={{
                ease: 'linear',
                duration: 1.6,
                type: 'keyframes'
            }}
            className=' h-72 w-11/12 md:w-3/12 md:h-96 relative shadow-2xl transition-all duration-700 '> 
            <Image
                loading='lazy' 
                className='object-cover bg-center'
                alt='image'
                src={path}
                fill
            />
        </motion.div>
    )
}
