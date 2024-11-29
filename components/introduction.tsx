"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            {/* Contenedor general */}
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-24 lg:py-32 md:grid-cols-2 md:gap-12">

                {/* Contenedor de la imagen */}
                <div className="flex justify-center">
                    <div className="rounded-full border-4 border-secondary overflow-hidden">
                        <Image
                            src="/perfil.jpg"
                            priority
                            width={300}
                            height={300}
                            alt="Imagen de perfil"
                        />
                    </div>
                </div>

                {/* Contenedor del texto */}
                <div className="flex flex-col justify-center items-center md:items-start max-w-lg mx-auto">
                    <h1 className="mb-6 text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
                        Hola, soy David.
                        <TypeAnimation
                            sequence={[
                                "Desarrollador web junior.",
                                1000,
                                "En busca de nuevas alturas.",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                            className="block text-secondary mt-2"
                        />
                    </h1>
                    <p className="text-lg text-center md:text-left mb-6 text-gray-300">
                        Soy un apasionado del desarrollo web, con interés en crear soluciones innovadoras y funcionales.
                        Siempre atento nuevas tecnologías.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <a
                            href="/projects"
                            className="px-4 py-2 border-2 rounded-lg text-md transition-all hover:shadow-xl hover:shadow-white/50 text-center"
                        >
                            Mis proyectos
                        </a>
                        <a
                            href="/contact"
                            className="px-4 py-2 border-2 border-secondary text-secondary rounded-lg text-md transition-all hover:shadow-xl hover:shadow-secondary text-center"
                        >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
