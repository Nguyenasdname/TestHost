import { type Variants, motion } from "framer-motion"
import { variants } from "../../animation/variant";

const RenderImageCloud = ({ className, cloudVariant, src }: { className: string, cloudVariant: Variants, src: string }) => {
    return (
        <motion.img
            src={src}
            variants={cloudVariant}
            initial='initial'
            animate='animate'
            className={className}
        />
    )
}

const HomePage = () => {
    return (
        <div className="relative w-full h-full bg-[url('/images/backgrounds/grass_background.jpg')] bg-cover bg-center h-screen overflow-hidden">
            <RenderImageCloud cloudVariant={variants.animateWS} src="./images/clouds/cloud_1.png" className="absolute bottom-0 left-0 h-100 z-20" />
            <RenderImageCloud cloudVariant={variants.animateWS} src="./images/clouds/cloud_1.png" className="absolute bottom-0 right-0 h-100 z-20 scale-x-[-1]" />
            <RenderImageCloud cloudVariant={variants.animateWS} src="./images/clouds/cloud_1.png" className="absolute top-0 right-0 h-100 z-20 rotate-180" />
            <RenderImageCloud cloudVariant={variants.animateWS} src="./images/clouds/cloud_1.png" className="absolute top-0 left-0 h-100 z-20 rotate-180 scale-x-[-1]" />

            <img src="./images/clouds/cloud_2.png" className="absolute z-11 top-[-20%] right-[20%] h-120" />
            <img src="./images/clouds/cloud_2.png" className="absolute z-11 rotate-180 bottom-[-20%] right-[20%] h-120" />
            <img src="./images/clouds/cloud_2.png" className="absolute z-12 top-13 right-[-20%] h-120 rotate-90" />
            <img src="./images/clouds/cloud_2.png" className="absolute z-12 top-13 left-[-20%] h-120 rotate-270" />

            <div className="flex flex-1 text-white items-center justify-center z-100">Hello World</div>
        </div>
    )
}

export default HomePage