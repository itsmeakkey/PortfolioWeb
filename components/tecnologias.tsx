// components/Tecnologias.tsx
import { frontEndTechnologies, backEndTechnologies, otherTools } from "@/data";

const Tecnologias = () => {
  return (
    <div className="mt-10 max-w-screen-md mx-auto">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-4">Front End</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 justify-center border border-[#00B4D8] rounded-lg p-4">
          {frontEndTechnologies.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center p-4 rounded-lg shadow-sm">
              {tech.logo}
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-4">Back End</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 justify-center border border-[#00B4D8] rounded-lg p-4">
          {backEndTechnologies.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center p-4 rounded-lg shadow-sm">
              {tech.logo}
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Otras herramientas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 justify-center border border-[#00B4D8] rounded-lg p-4">
          {otherTools.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center p-4 rounded-lg shadow-sm">
              {tool.logo}
              <p className="mt-2 text-sm">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;





