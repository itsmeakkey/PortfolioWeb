"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            {/* Contenedor general */}
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-10 lg:py-16 md:grid-cols-2 md:gap-12">

                {/* Contenedor de la imagen */}
                <div className="w-full flex justify-center">
                    <div className="rounded-full border-4 border-secondary overflow-hidden">
                        <Image
                            src="/perfil.jpg"
                            priority
                            width={800}
                            height={800}
                            alt="Imagen de perfil"
                            className="w-full max-w-[300px] md:max-w-[400px] h-auto"
                        />
                    </div>
                </div>

                {/* Contenedor del texto */}
                <div className="flex flex-col justify-center items-center md:items-start max-w-lg mx-auto">
                    <h1 className="mb-5 text-2xl md:text-4xl font-bold leading-tight text-center md:text-left">
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
                    <p className="text-lg text-justify md:text-left mb-6 text-gray-300">                        Titulado reciéntemente en DAW, soy un apasionado mundo del desarrollo. 
                        Me encanta estar atento a nuevas tecnologías y siempre estoy dispuesto a enfrentar nuevos desafíos.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <a
                            href="/portfolio"
                            className="px-4 py-2 border-2 rounded-lg text-md transition-all hover:shadow-xl hover:shadow-white/50 text-center"
                        >
                            Mis proyectos
                        </a>
                        <a
                            href="CV_David_Ruiz_Aranda.pdf" target_="_blank" rel="noreferrer"
                            className="px-4 py-2 border-2 border-secondary text-secondary rounded-lg text-md transition-all hover:shadow-xl hover:shadow-secondary text-center"
                        >
                            Descarga mi CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
