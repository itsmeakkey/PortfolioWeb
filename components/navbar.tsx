"use client"
import Link from "next/link"
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sn">
                    {itemsNavbar.map((item) => (
                        <div key={item.id}
                            className={`px-3 py-2 transition duration-150 
                                rounded-full cursor-pointer hover:bg-secondary 
                            ${router === item.link && 'bg-secondary'}`}> {/*Cuando el router sea igual a nuestro link, se mantiene el hover en ese botón*/}
                            {/*En el hover, secondary es el color asignado en el fichero de configuración de tailwind*/}
                            {/*Los iconos se usan de data.tsx usando Lucide*/}
                            <Link href={item.link}>{item.icon}</Link>
                        </div>


                    ))}
                </div>

            </nav>
        </MotionTransition>
    );
}

export default Navbar;