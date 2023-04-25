 
import Packages from './packages'
import { BsCamera, BsCameraVideo } from 'react-icons/bs'
import { AiFillCheckCircle, AiOutlineStar } from 'react-icons/ai' 
import Footer from './footer'
import { useState } from 'react' 
import { motion } from 'framer-motion';
import emailjs  from '@emailjs/browser'

export default function Section5({render}) {
    const [pck1, setPck1] = useState(0); 
    const [pck2, setPck2] = useState(0); 
    const [pck3, setPck3] = useState(0); 
    const [total, setTotal] = useState(0);  
    const [err, setErr] = useState(null);
    const [email, setEmail] = useState('');
    const [saving, setSaving] = useState(false);
    const [save, setSave] = useState(false);
    const [errEmail, setErrEmail] = useState(false)
    let message = ''
 

    const handleChange = (e) => { 
        setEmail(e.target.value)  
        setErr(false);
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)){
        setErr(true)
        } 
    }

    const handleSubmit = async() => {
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)){
            return setErr(true)
        } 
        setErr(false)
        if(total < 1){
            return null
        }    
        setSaving(true)
        if(pck1 > 0) {
            message = `(x ${pck1}) Package 1: ₱ ${pck1 * 2000}\n `
        }
        if(pck2 > 0){
            message = message + `(x ${pck2}) Package 2: ₱ ${pck2 * 3000}\n `
        }
        if(pck3 > 0){
            message = message + `(x ${pck3}) Package 3: ₱ ${pck3 * 4000}\n `
        }   
        message = message + `Total Price: ₱ ${total}` 
        const data = await emailjs.send("service_e3xvc25","template_kixc19f", { message, from_name: email, }, "vd3_PIqM0a3wL8uOa").catch((err) => {
            setErrEmail(true)
        }); 
        setSave(true)
        setSaving(false)
        setEmail('')
        message = ''
        setPck1(0)
        setPck2(0)
        setPck3(0)
        setTotal(0)
        setTimeout(() => {
            setErrEmail(false)
            setSave(false)
        }, 5000);
    } 
 
    const handleAdd = (packge, price) => { 
        if(Number(price) == 2000){
            setPck1(pre => Number(pre) + 1); 
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
            <div className={`absolute w-fit top-12 right-10 bg-green-300 px-5 py-2 rounded-md items-center gap-x-3 ${save ? 'flex opacity-100 transition-all' : 'hidden opacity-0 transition-all' } z-50`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>          
                <h1>Package Saved!</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 hover:text-black hover:cursor-pointer" onClick={() => setSave(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> 
            </div>
            <div className={`absolute w-fit  top-12 right-10 bg-red-800 px-5 py-2 rounded-md items-center gap-x-3 ${errEmail ? 'flex opacity-100 transition-all' : 'hidden opacity-0 transition-all' } z-50`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>          
                <h1 className='text-white'>Invalid email address!</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="w-6 h-6 hover:text-slate-500 hover:cursor-pointer" onClick={() => setSave(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> 
            </div>
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
                                desc="Video coverage" 
                                icon={<BsCameraVideo size={50} color='black'  />} 
                                handleAdd={handleAdd}
                                handleSub={handleSub}
                                pck={pck2}
                            />
                            <Packages 
                                price="4000" 
                                title="Package 3" 
                                desc="Photo adn Video coverage" 
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
                            <div className='relative w-full h-4/5 '>        
                                <input 
                                    id='input' 
                                    onChange={handleChange} 
                                    value={email} 
                                    className={`w-full pr-10 absolute  top-0 ${err ? ' focus:outline-red-700  border-red-700 border-2 outline-2' : 'border-none outline-none' } left-0 py-2 mt-2 px-4 drop-shadow-md outline-2`}
                                    placeholder='Email' 
                                />
                                <AiFillCheckCircle size={30} className={`absolute right-1 my-3 top-[1px] ${err ? 'text-red-700' : 'text-black'} `} />
                            </div>
                            <button  
                                className={`${total && 'outline-text-shadow'} mt-16 disabled:cursor-not-allowed  disabled:text-slate-600 mb-4 text-center w-full text-outline hover:drop-shadow-md cursor-pointer transition-all hover:scale-[1.1] disabled:hover:scale-100`}
                                onClick={handleSubmit}
                                disabled={!total && true}
                            >
                                {saving ? 'Saving...' : 'Pick me up'}
                            </button> 
                        </div> 
                    </div> 
                </motion.div>  
            </div> 
            <Footer render={render} />
        </section>
    )
}
