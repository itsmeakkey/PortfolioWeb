"use client"
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion-transitions';


interface MotionTransitionProps {
    children: React.ReactNode //Por defecto con React
    position: 'right' | 'bottom' //Lo pasamos a FadeIn
    className?: string
}

const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position, className } = props
    return ( //Div que acepta props diferentes
        <motion.div 
            variants={fadeIn(position)}
            initial= "hidden"
            animate="visible"
            exit="hidden"
            className={className}>
            {children}
        </motion.div>
    );
}

export default MotionTransition