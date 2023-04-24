import { motion } from 'framer-motion'

export default function Wrapper({children}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{type: 'spring', duration: 1.2, damping: 99, stiffness: 99 }} 
            viewport={{once: false}} 
            className='flex justify-evenly items-center flex-col sm:flex-row px-5 pb-5 md:w-5/12 relative transition-all'
        > 
            {children}
        </motion.div>
    )
}
