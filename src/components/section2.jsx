import Image from 'next/image'
import { ImageWrapper, Image1 } from '.';
import { motion } from 'framer-motion';
import image6 from '../../public/image6.png';
import image5 from '../../public/image5.png';
import image4 from '../../public/image4.png';
import image3 from '../../public/image3.png';
import image2 from '../../public/image2.png';
import flower from '../../public/flowers.png'
import image11 from '../../public/image11.png'

export default function section2() {
    return (
      <section className="flex flex-col w-screen relative  ">  
        <h1 className="sacramento text-4xl md:text-5xl text-center p-4 mt-5 md:mt-0 transition-all">Treasure and captured the Moments</h1> 
        <div className='flex flex-col mt-5'>
          <h1 className='roboto text-2xl text-center py-0'>Our Works</h1>
          <div className="flex flex-col md:flex-row transition-all ">
            <ImageWrapper >
              <Image1 path={image6} />
              <Image1 path={image5} />
            </ImageWrapper>
            <div className="hidden md:block w-2/12"  /> 
            <ImageWrapper> 
              <Image1 path={image4} />
              <Image1 path={image2} />
            </ImageWrapper>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <ImageWrapper>
            <div className="w-11/12 md:w-11/12 drop-shadow-2xl h-96 relative"> 
              <Image 
                className='object-cover'
                fill
                alt='image'
                src={image3}
              />
            </div> 
          </ImageWrapper>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                ease: 'linear',
                duration: 1.6,
                type: 'keyframes'
            }}  
            viewport={{once: false}} 

            className="w-screen  h-72 md:h-auto md:w-2/12 flex justify-center items-center relative transition-all"
          >
            <Image 
              className='object-contain'
              fill
              alt='image'
              src={flower}
            />
          </motion.div>
          <ImageWrapper>
            <div className="w-11/12 md:w-11/12  overflow-hidden drop-shadow-2xl h-96 relative"> 
              <Image 
                className='object-cover'
                fill
                alt='image'
                src={image11}
              />
            </div> 
          </ImageWrapper>
        </div>
      </section>
    )
}
