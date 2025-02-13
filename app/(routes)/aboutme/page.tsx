"use client"
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import { Avatar } from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/timeline";
import CircleImage from "@/components/circle-image";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage/>
            <ContainerPage>

                <h1 className="text-4xl leading-tight text-center sm:text-5xl md:text-6xl md:text-left md:mt-10">
                    Mi trayectoria{' '}
                    <span className="font-bold text-secondary">hasta hoy:</span>
                </h1>

                <br></br>
                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default PageAboutMe;