import { type Variants, motion } from "framer-motion"
import { variants } from "../../animation/variant";
import type { houseInterface } from "../../interfaces/HouseInterface"
import type { cloudInterface } from "../../interfaces/CloudInterface"
import { useState } from "react";

const RenderImageCloud = ({ className, cloudVariant, src, setCloudFinished }: { className: string, cloudVariant: Variants, src: string, setCloudFinished: (type: boolean) => void }) => {
    return (
        <motion.img
            src={src}
            variants={cloudVariant}
            initial='initial'
            animate='animate'
            className={className}
            onAnimationComplete={() => setCloudFinished(true)}
        />
    )
}

const clouds_1: cloudInterface[] = [
    { className: 'bottom-0 left-0' },
    { className: 'bottom-0 right-0 scale-x-[-1]' },
    { className: 'top-0 right-0 rotate-180' },
    { className: 'top-0 left-0 rotate-180 scale-x-[-1]' }
]

const clouds_2: cloudInterface[] = [
    { className: 'top-[-20%] right-[20%]' },
    { className: 'rotate-180 bottom-[-20%] right-[20%]' },
    { className: 'top-13 right-[-20%] rotate-90' },
    { className: 'top-13 left-[-20%] rotate-270' },
]

const houses: houseInterface[] = [
    { id: 1, name: "Nhà A", className: "bottom-2 left-50", link: 'facebook' },
    { id: 2, name: "Nhà B", className: "bottom-25 left-20", link: 'facebook' },
    { id: 3, name: "Nhà C", className: "bottom-10 left-100", link: 'facebook' },
    { id: 4, name: "Nhà D", className: "bottom-22 left-75", link: 'facebook' },
    { id: 5, name: "Nhà Có Thạch Sanh Gãy Đàn 🔥", className: "bottom-50 left-60", link: 'guitar-page' },
]

const HomePage = () => {
    const [hoverHouse, setHoverHouse] = useState<number>(0)
    const [cloudFinished, setCloudFinished] = useState<boolean>(false)

    return (
        <div className="relative w-full bg-[url('/images/backgrounds/grass_background.jpg')] bg-cover bg-center h-screen overflow-hidden">
            <div className="clouds">
                {clouds_1.map((cloud) => (
                    <>
                        <RenderImageCloud cloudVariant={variants.animateWS} src="./images/clouds/cloud_1.png" className={`absolute ${cloudFinished ? 'z-1' : 'z-15'} h-100 ${cloud.className}`} setCloudFinished={setCloudFinished} />
                    </>
                ))}

                {clouds_2.map((cloud) => (
                    <>
                        <RenderImageCloud cloudVariant={variants.animateS} src="./images/clouds/cloud_2.png" className={`absolute ${cloudFinished ? 'z-1' : 'z-20'} h-120 ${cloud.className}`} setCloudFinished={setCloudFinished}/>
                    </>
                ))}
            </div >
            <div className="houses">
                {houses.map((house) => (
                    <div className={`absolute z-5 w-30  ${house.className} cursor-pointer`}
                    onClick={() => window.location.href = house.link}
                    >
                        {hoverHouse === house.id && (
                            <div className="flex-1 text-black text-center justify-center font-semibold">
                                {house.name}
                            </div>
                        )}
                        <img src='./images/houses/house_2.png'
                            className={` transition duration-300 ease-in-out hover:scale-110
                        ${hoverHouse === 0 ? "" : hoverHouse === house.id ? 'brightness-150' : 'grayscale'}
                        `}
                            onMouseEnter={() => setHoverHouse(house.id)}
                            onMouseLeave={() => setHoverHouse(0)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage