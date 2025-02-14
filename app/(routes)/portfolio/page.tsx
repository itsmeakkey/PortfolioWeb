import { dataPortfolio } from "@/data";
import VectorImage from "@/components/vector-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <VectorImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl leading-tight text-center sm:text-5xl md:text-6xl md:text-left md:mt-10">Mis últimos <span className="font-bold text-secondary">trabajos realizados:</span></h1>
                
                {/* Solo ajustamos el margen superior en este contenedor, sin afectar el h1 */}
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-10 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}


export default PortfolioPage;