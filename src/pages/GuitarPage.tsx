import { useRef, useState } from "react"
import { motion } from "framer-motion";
import { variants } from "../../animation/variant";

const GuitarPage = () => {

    const guitarRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const handlePlay = () => {
        if (guitarRef.current) {
            if (!isPlaying) {
                guitarRef.current.currentTime = 0
                guitarRef.current.play();
                setIsPlaying(true);
            } else {
                guitarRef.current.pause();
                setIsPlaying(false);
            }
        }
    }

    const handelStop = () => {
        setIsPlaying(false)
    }

    return (
        <div className="relative w-[100vw] h-[100vh] overflow-auto bg-[url('/images/backgrounds/stage.png')] bg-cover bg-center overflow-hidden">
            <audio ref={guitarRef} src="./audios/PlayingGod.mp3" onEnded={() => handelStop()} />
            <div>
                <img src="./images/guitars/indieshiet.png" className="absolute w-100 left-[40%] top-20 z-10" />
                <img src="./images/guitars/guitar.png" className={`absolute z-20 w-98 top-45 left-142 
            cursor-pointer ${isPlaying ? ' glow animate-pulse' : ' '}`} onClick={() => handlePlay()} />
            </div>
            {isPlaying && (
                <>
                    <motion.img className="absolute w-100 right-30 top-30 z-50"
                    src="./images/meme/shocked_black_guy.png"
                        variants={variants.textPopUp}
                        animate='animate'
                        initial='initial'
                    />
                </>
            )}
        </div>
    )
}

export default GuitarPage