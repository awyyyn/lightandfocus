import { motion } from 'framer-motion'

export default function Wrapper({children}) {
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
            className='flex justify-evenly items-center flex-col sm:flex-row p-5 md:w-5/12 relative transition-all'
        > 
            {children}
        </motion.div>
    )
}
