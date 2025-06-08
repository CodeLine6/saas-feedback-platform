import Image from "next/image"
import HeroCta from "./hero-cta"

const Hero = () => {
    return (
        <section className="w-full">
            <div className="container mx-auto px-4 my-24 flex flex-row justify-around">
                <div className="flex flex-col max-w-md">
                    <div className="mb-8 ">
                        <h1 className="mb-5 text-5xl font-extrabold">Collect your feedback seamlessly</h1>
                        <p className="text-gray-500 text-lg">Easily intergrate feedback widget and start collecting feedback today</p>
                    </div>
                    <div>
                        <HeroCta />
                    </div>
                </div>
                <div >
                <Image src={'./demo.gif'} alt="demo" className="-mt-32"  width={500} height={500} unoptimized={true} />
                </div>
            </div>
        </section>
    )
}

export default Hero