import { motion } from "framer-motion";

export const divsFadeIn = {
    as: motion.div,
    initial: { opacity: 0, y: "20%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
}

export const titleFadeIn = {
    as: motion.h2,
    initial: { opacity: 0, y: "20%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
}

export const textFadeIn = {
    as: motion.p,
    initial: { opacity: 0, y: "20%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
}

export const textFade = {
    as: motion.p,
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true }
    
}