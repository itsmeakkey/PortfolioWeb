import ContainerPage from "@/components/container";
import Tecnologias from "@/components/tecnologias";
import TransitionPage from "@/components/transition-page";
import VectorImage from "@/components/vector-image";


const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <VectorImage />
            <ContainerPage>
                <h1 className="text-4xl leading-tight text-center sm:text-5xl md:text-6xl md:text-left md:mt-10">Tecnologías <span className="font-bold text-secondary">trabajadas:</span></h1>
            <Tecnologias/>

            </ContainerPage >
        </>
    );
}

export default PageAboutMe;