"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            {/* Contenedor general */}
            <div className="z-20 flex flex-col md:flex-row items-center justify-center h-full p-4 py-12 md:py-8 lg:py-10 gap-4 md:gap-6 lg:gap-20">

                {/* Contenedor de la imagen */}
                <div className="flex-grow-0 flex justify-center">
                    <div className="rounded-full border-4 border-secondary overflow-hidden">
                        <Image
                            src="/perfil.jpg"
                            priority
                            width={800}
                            height={800}
                            alt="Imagen de perfil"
                            className="w-full max-w-[250px] md:max-w-[350px] h-auto"
                        />
                    </div>
                </div>

                {/* Contenedor del texto */}
                <div className="flex-grow-0 flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-auto lg:w-3/12">
                    <h1 className="mb-4 text-2xl md:text-4xl font-bold leading-tight">
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
                            className="block text-secondary mt-1"
                        />
                    </h1>
                    <p className="text-lg mb-4 text-gray-300 text-justify md:text-left">
                        Titulado recientemente en DAW, soy un apasionado del mundo del desarrollo.
                        Me encanta estar atento a nuevas tecnologías y siempre estoy dispuesto a enfrentar nuevos desafíos.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <a
                            href="/portfolio"
                            className="px-4 py-2 border-2 rounded-lg text-md transition-all hover:shadow-xl hover:shadow-white/50"
                        >
                            Mis proyectos
                        </a>
                        <a
                            href="CV_David_Ruiz_Aranda.pdf"
                            target="_blank"
                            className="px-4 py-2 border-2 border-secondary text-secondary rounded-lg text-md transition-all hover:shadow-xl hover:shadow-secondary"
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


