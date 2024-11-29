"use client"
import { transitionPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "motion/react";
const TransitionPage = () => {
    return (
        //FramerMotion
        <AnimatePresence mode="wait">
            <div>
                {/*Barrido al cambiar página*/}
                <motion.div
                className="fixed top-0 bottom-0 right-full
                w-screen z-30 bg-[#1E3A8A]" /*Fondo azul oscuro para el efecto*/
                variants={transitionPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}} /*0.2 en recargar, efecto easeInOut*/
                >

                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;