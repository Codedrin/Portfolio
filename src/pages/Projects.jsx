import { CTA } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-center">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-extrabold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-4 leading-relaxed text-center">
        I love creating solutions to real-world problems! Here are some of my
        exciting projects designed with passion and innovation.
      </p>

      {/* Fun & Interactive Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-16">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => window.open(project.link, "_blank")}
            className="relative bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl shadow-xl p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transform transition duration-500"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-lg opacity-30 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 -z-10"></div>

            {/* Icon */}
            <div className="w-16 h-16 flex justify-center items-center rounded-full mx-auto bg-white transform hover:scale-125 transition duration-300">
              <img
                src={project.iconUrl}
                alt={project.name}
                className="w-10 h-10 object-contain animate-bounce"
              />
            </div>

            {/* Content */}
            <div className="text-center mt-6 text-white">
              <h4 className="text-2xl font-bold">{project.name}</h4>
              <p className="mt-3 text-sm leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CTA />
    </section>
  );
};

export default Projects;
