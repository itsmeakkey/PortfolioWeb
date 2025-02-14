import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, PersonStanding, Contact2Icon, ContactIcon, MailIcon, BookOpenCheckIcon } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaAngular, FaBootstrap, FaReact, FaGit, FaPhp, FaDatabase, FaJava, FaToolbox } from "react-icons/fa";
import { SiSpring, SiSymfony, SiPostman, SiEclipseide } from "react-icons/si"
export const socialNetworks = [
     {
         id: 1,
         logo: <Github size={30} strokeWidth={1} />,
         src: "https://github.com/itsmeakkey/",
     },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/david-ruiz-aranda-67ab94207",
    }
];

export const frontEndTechnologies = [
    { id: 1, logo: <FaHtml5 size={50} />, name: 'HTML' },
    { id: 2, logo: <FaCss3Alt size={50} />, name: 'CSS' },
    { id: 3, logo: <FaJsSquare size={50} />, name: 'JavaScript' },
    { id: 4, logo: <FaAngular size={50} />, name: 'Angular' },
    { id: 5, logo: <FaReact size={50} />, name: 'React' },
    { id: 6, logo: <FaBootstrap size={50} />, name: 'BootStrap' },
];

export const backEndTechnologies = [
    { id: 1, logo: <FaPhp size={50} />, name: 'PHP' },
    { id: 2, logo: <FaDatabase size={50} />, name: 'MySQL' },
    { id: 3, logo: <SiSpring size={50} />, name: 'SpringBoot' },
    { id: 4, logo: <SiSymfony size={50} />, name: 'Symfony' },
    { id: 5, logo: <FaJava size={50} />, name: 'Java' },
];

export const otherTools = [
    { id: 1, logo: <FaGit size={50} />, name: 'Git' },
    { id: 2, logo: <SiPostman size={50} />, name: 'Postman' },
    { id: 3, logo: <SiEclipseide size={50} />, name: 'Eclipse' },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/aboutme",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 4,
        title: "Book",
        icon: <BookOpenCheckIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
    },

];

export const dataAboutPage = [
    {
        id: 1,
        title: "(Becario) Desarrollador Angular y SpringBoot",
        subtitle: "NTT Data",
        description: `Mantenimiento y mejora de proyectos web:
        Implementación de nuevas funcionalidades. Corrección de errores y optimización de interfaces.
        Realización de pruebas y aseguramiento de calidad. Integración de sistemas externos y APIs.
        Documentación y seguimiento de cambios.`,
        date: "Ene 2025",
    },
    {
        id: 2,
        title: "Soporte técnico",
        subtitle: "Dinfotec | ExCom",
        description: `Mantenimiento de equipos informáticos. 
            Análisis y diagnóstico de redes. 
            Atención y soporte técnico a usuarios. 
            Resolución de incidencias y problemas técnicos. 
            Configuración y actualización de sistemas. 
            Asesoramiento en el uso de software y hardware.`,
        date: "Mar 2021",
    }, 
]



export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema Gestor de Alquiler de Coches",
        image: "/port1.png",
        urlGithub: "https://github.com/itsmeakkey/TFG-Coches",
        urlDemo: "#", 

    },
    {
        id: 2,
        title: "API REST de Gestión de Usuarios",
        image: "/port2.png",
        urlGithub: "https://github.com/itsmeakkey/BackProyectoEmpresa",
        urlDemo: "#",

    },

];
