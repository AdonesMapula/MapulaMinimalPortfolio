import { skills } from '../data/skills';
import { projects } from '../data/projects';
import PrintButton from '../components/PrintButton';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 print:py-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="no-print mb-8 flex justify-center">
          <PrintButton label="Print Resume" onClick={handlePrint} />
        </div>

        <div className="resume-content">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-black dark:border-white print:border-black">
            <h1 className="text-4xl font-bold mb-2">Adones Mapula</h1>
            <p className="text-lg opacity-80">IT Student / Aspiring Software Developer</p>
            <p className="text-sm opacity-70 mt-2">
              Southwestern University PHINMA | Bachelor of Science in Information Technology
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-black dark:border-white print:border-black pb-2">
              Education
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology (BSIT)</h3>
              <p className="opacity-80">Southwestern University PHINMA</p>
              <p className="text-sm opacity-70">Present</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-black dark:border-white print:border-black pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm border border-black dark:border-white print:border-black px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-black dark:border-white print:border-black pb-2">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                  <p className="text-sm opacity-80 mb-2">{project.description}</p>
                  <p className="text-xs opacity-70">
                    <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                  </p>
                  {project.github && (
                    <p className="text-xs opacity-70">
                      <strong>GitHub:</strong> {project.github}
                    </p>
                  )}
                  {project.liveDemo && (
                    <p className="text-xs opacity-70">
                      <strong>Live Demo:</strong> {project.liveDemo}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-black dark:border-white print:border-black pb-2">
              Additional Information
            </h2>
            <p className="text-sm opacity-80">
              Passionate about software development with a keen interest in building 
              efficient and user-friendly applications. Enjoys soccer as a hobby, 
              which helps develop teamwork and strategic thinking skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

