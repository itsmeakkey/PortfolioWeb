import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, PersonStanding, Contact2Icon, ContactIcon, MailIcon } from "lucide-react";

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
        icon: <MailIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
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
