import { motion } from 'framer-motion'

export default function Packages({title, desc, icon, price, handleAdd, handleSub, pck}) {
    return (
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{
                duration: 1,
                ease : 'easeIn',
                type: 'tween', 
                staggerDirection: -1,
                staggerChildren: 0.5
            }}
            viewport={{once: false, amount: 'all'
        }}
            className='relative flex justify-between self-center w-[90%] transition-all'>
            <audio id='btnsfx' src='/sfx/btn.mp3' />
            <div className='flex flex-col '>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <h1 >{desc}</h1>
                <p className='m-0 mb-2 font-bold'>₱ {price}</p>
                <div className='flex gap-5'>
                    <button 
                        className='bg-[#9DF3FF] drop-shadow-md px-3 pb-1 text-xl rounded-lg' 
                        onClick={() => {
                            const playmusic = document.getElementById('btnsfx')
                            playmusic.play();
                            handleAdd(title, price)
                        }}
                    >
                        +
                    </button>
                    <button 
                        disabled={pck == 0 ? true : false}
                        className='bg-[#9DF3FF] drop-shadow-md px-4 pb-1 text-xl rounded-lg disabled:cursor-not-allowed disabled:bg-slate-200' 
                        onClick={() => {
                            const playmusic = document.getElementById('btnsfx')
                            playmusic.play();
                            handleSub(price)
                        }}
                    >
                        -
                    </button> 
                </div>
            </div>
            <div className='flex items-center justify-center'>
                {icon}
            </div>
        </motion.div>
    )
}
