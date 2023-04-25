import S3image from "./s3image";
import image7 from '../../public/image7.png'
import image8 from '../../public/image8.png'
import image9 from '../../public/image9.png'
import image111 from '../../public/image111.png'
import image10 from '../../public/image10.png'
import image12 from '../../public/image12.png'


export default function section3() {
    return (
        <section className="flex mb-10 w-screen flex-col gap-10 mt-5 transition-all">
            <div className="flex flex-col gap-5 md:flex-row justify-evenly items-center  w-screen ">
                <S3image path={image7} />
                <S3image path={image8} />
                <S3image path={image9} />
            </div>
            <div className="flex flex-col gap-5 md:flex-row justify-evenly items-center  w-screen ">
                <S3image path={image111} />
                <S3image path={image10} />
                <S3image path={image12} />
            </div>
        </section>
    )
}
