import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ImageComponent({path}) {
    return (
        <motion.div  
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                ease: 'linear',
                duration: 1.6,
                type: 'keyframes'
            }}
            viewport={{once: false}}
            className='relative h-96 w-11/12 mx-3  shadow-lg mt-3 md:w-5/12  transition-all'
        >
            <Image 
                loading='lazy' 
                className='object-cover'
                fill
                alt='holding-hands-image'
                src={path}
            />
        </motion.div>
    )
}
