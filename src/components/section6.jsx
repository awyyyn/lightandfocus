import React, { useRef, useState } from 'react';
import Footer from './footer';
import img from '../../public/messageimg.jpg';
import Image from 'next/image';
import emailjs from '@emailjs/browser'

export default function Section6({handleClick}) { 
    const [name, setName] = useState('');
    let [nameErr, setNameErr] = useState(false);
    const [email, setEmail] = useState('');
    let [emailErr, setEmailErr] = useState(false);
    const [date, setDate] = useState('');
    let [dateErr, setDateErr] = useState(false);
    const [message, setMessage] = useState('');
    let [messageErr, setMessageErr] = useState(false); 
    const [isLoading, setIsloading] = useState(false)

    const handleSubmit = async() => { 
        setIsloading(true);
        if(name == "") setNameErr(true) 
        if(date == '') setDateErr(true);
        if(email == '') setEmailErr(true);
        if(message == '') setMessageErr(true);
        if(name == '' || email == '' || date == '' || message == "") return ;
        console.log('todo')
        let sendmessage = ` Name: ${name} \n Date: ${date} \n Email: ${email} \n Message: ${message}.`
         
        await emailjs.send("service_e3xvc25","template_cup4982", { message: sendmessage, from_name: email, }, "vd3_PIqM0a3wL8uOa").catch((err) => alert('Email Service or Network Error'));
        handleClick();
        setName('');
        setEmail('');
        setDate('');
        setMessage('');
        setIsloading(false);
    } 


    return (
        <section className='w-screen h-auto md:h-screen relative  flex flex-col'>
            
            <div className='w-screen min-h-[25px] bg-[#F5D061]' />
            <div className='w-full flex h-full items-center flex-col p-5 md:flex-row md:p-0 gap-y-5'>
                <div className='flex flex-col md:w-6/12 w-full h-auto md:p-14 justify-center gap-2'>
                    <h1 className='text-3xl pl-9'>Message us</h1>
                    <div className='  w-full h-full flex justify-center py-5' >
                        <div className='w-10/12 relative   '>
                            <div className='absolute sm:h-[250px] md:h-[300px] h-[180px] w-full sm:-top-4 sm:-left-4 -top-2 -left-2 bg-[#9DF3FF]'></div>
                            <div className='absolute sm:h-[250px] md:h-[300px] h-[180px] w-full sm:-right-4 sm:-bottom-4 -bottom-2 -right-2 bg-[#F5D061]'></div>
                            <div className='relative w-full  sm:h-[250px] h-[180px] md:h-[300px]'>    
                                <Image className="absolute h-full w-full" alt="img" src={img} />
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='flex md:w-6/12 flex-col roboto py-5 px-2 md:px-16 gap-y-5 md:text-xl'>
                    <div className='group space-y-2'> 
                        <label className={`after:content-["(required)"] after:pl-2 ${nameErr ? 'after:text-red-500' : 'after:text-black'} `} >Your Name</label>
                        <input 
                            type='text' 
                            className={`bg-[#9DF3FF] w-full p-2 focus:outline-[#F5D061] ${nameErr ? 'border-2 border-red-500' : 'border-none'}`} 
                            placeholder='Enter your name here' 
                            value={name} 
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameErr(false);
                            }} 
                        />
                    </div>
                    <div className='group space-y-2'> 
                        <label className={`after:content-["(required)"] after:pl-2 ${emailErr ? 'after:text-red-500' : 'after:text-black'}`}>Your Email</label>
                        <input 
                            type='email' 
                            className={`bg-[#9DF3FF] w-full p-2  ${emailErr ? 'border-2 border-red-500 focus:outline-red-500' : 'border-none focus:outline-[#F5D061]'}`}
                            placeholder='example@email.com' 
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailErr(false);
                                if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)) setEmailErr(true)
                            }}    
                            value={email}
                        />
                    </div>
                    <div className='group space-y-2'> 
                        <label className={`after:content-["(required)"] after:pl-2 ${dateErr ? 'after:text-red-500' : 'after:text-black'} `}>Event Date</label>
                        <input  
                            type='date'   
                            className={`bg-[#9DF3FF] w-full p-2 focus:outline-[#F5D061] ${dateErr ? 'border-2 border-red-500' : 'border-none'}`} 
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                                setDateErr(false);
                            }}   

                        />
                    </div>
                    <div className='group space-y-2'> 
                        <label className={`after:content-["(required)"] after:pl-2 ${messageErr ? 'after:text-red-500' : 'after:text-black'} `}>Your Message</label>
                        <textarea 
                            type='text' 
                            className={`bg-[#9DF3FF] w-full p-2 focus:outline-[#F5D061] ${messageErr ? 'border-2 border-red-500 focus:outline-red-500' : 'border-none focus:outline-none'} `} 
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setMessageErr(false);
                            }}
                            placeholder='message...' 
                        />
                    </div> 
                    
                    <button className='bg-[#9DF3FF] py-2' onClick={handleSubmit}>{isLoading ? 'Sending...' : 'Send Message'} </button>
                </div>
            </div>
            
        </section>
    )
}
