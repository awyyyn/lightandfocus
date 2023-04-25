import Card from "./card"

 
export default function Section4( ) { 
    return( 
        <section className='flex h-auto      pb-20 w-screen relative flex-col'>
            <div className='w-screen h-10 bg-[#F5D061]' />
            <h1 className="w-screen text-[50px] sm:text-7xl pt-10 text-center sacramento">Testimonials</h1>
            <div className=" w-screen h-full overflow-x-scroll scroll-smooth overflow-ellipsis relative py-5 px-10 flex "> 
                {testimonials.map(({ id, by, testimonial }) => (
                    <Card key={id} testimonial={testimonial} by={by} />
                ))}
            </div>
        </section>
    )
}

export const testimonials = [
    {   
        id: 1,
        testimonial: 'I used to struggle with getting my photos to look sharp and in focus, especially in low light conditions. But after learning about techniques like manual focus and using a tripod, my photos have improved dramatically. The right lighting can also make a huge difference in getting that perfect shot.',
        by: 'Alliyah O.'
    },
    {   
        id: 2,
        testimonial: 'I\'ve been a professional photographer for over 20 years, and I can honestly say that mastering the use of light and focus has been one of the most important skills I\'ve developed. It allows me to create images that not only look beautiful but also tell a story and evoke emotion.',
        by: 'Marvin R.'
    },
    {   
        id: 3,
        testimonial: 'As an amateur photographer, I used to think that as long as I captured the subject in the frame, it was a good shot. But learning about the importance of focus and depth of field opened up a whole new world for me. Now I love playing around with different lighting and focusing techniques to create unique and captivating images.',
        by: 'Sarah B.'
    }, 
    {   
        id: 4,
        testimonial: 'As an amateur photographer, I used to think that as long as I captured the subject in the frame, it was a good shot. But learning about the importance of focus and depth of field opened up a whole new world for me. Now I love playing around with different lighting and focusing techniques to create unique and captivating images.',
        by: 'Sarah B.'
    }, 
]