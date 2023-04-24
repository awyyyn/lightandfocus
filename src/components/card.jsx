import React from 'react'

export default function Card({id, testimonial, by}) {
    return (
        <div className="min-w-[320px] max-w-[320px] sm:min-w-[350px] sm:max-w-[380px] min-h-[500px] py-10 px-8  mx-5 bg-[#F9E7AF] border-[4px] border-[#F5D061] sm:border-black flex flex-col justify-evenly " key={id}>
            <p className="text-center roboto text-clip flex-wrap  ">{testimonial}</p>
            <p className="roboto text-center text-slate-800">- {by}</p>
        </div>  
    )
}
