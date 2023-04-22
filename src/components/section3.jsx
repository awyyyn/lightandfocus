import S3image from "./s3image";



export default function section3() {
    return (
        <section className="flex mb-10 w-screen flex-col gap-10 mt-5 transition-all">
            <div className="flex flex-col gap-5 md:flex-row justify-evenly items-center  w-screen ">
                <S3image path='/image7.png' />
                <S3image path='/image8.png' />
                <S3image path='/image9.png' />
            </div>
            <div className="flex flex-col gap-5 md:flex-row justify-evenly items-center  w-screen ">
                <S3image path='/image111.png' />
                <S3image path='/image10.png' />
                <S3image path='/image12.png' />
            </div>
        </section>
    )
}
