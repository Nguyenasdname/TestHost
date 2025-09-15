import { type Variants } from "framer-motion";

const animateN: Variants = {
    initial: { y: 0 },
    animate: {
        y: 200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateS: Variants = {
    initial: { y: 0 },
    animate: {
        y: -200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateW: Variants = {
    initial: { x: 0 },
    animate: {
        x: -200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateE: Variants = {
    initial: { x: 0 },
    animate: {
        x: 200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateWN: Variants = {
    initial: { x: 0, y: 0 },
    animate: {
        x: -200,
        y: -200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateEN: Variants = {
    initial: { x: 0, y: 0 },
    animate: {
        x: 200,
        y: -200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateWS: Variants = {
    initial: { x: 0, y: 0 },
    animate: {
        x: -200,
        y: 200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const animateES: Variants = {
    initial: { x: 0, y: 0 },
    animate: {
        x: 200,
        y: 200,
        transition: { duration: 3.5, ease: "easeInOut" }
    }
};

const textPopUp: Variants = {
    initial: {
        opacity: 0,
        scale: 2,
        y: -200
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut"
        }
    }
};

export const variants = {
    animateN,
    animateS,
    animateW,
    animateE,
    animateWN,
    animateEN,
    animateWS,
    animateES,
    textPopUp
};
