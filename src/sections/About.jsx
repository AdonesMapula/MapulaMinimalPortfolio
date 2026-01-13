const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed opacity-90">
          <p>
            I am a dedicated Bachelor of Science in Information Technology (BSIT) student 
            at Southwestern University PHINMA, passionate about software development and 
            technology innovation. As an aspiring software developer, I continuously seek 
            opportunities to expand my knowledge and apply my skills in real-world projects.
          </p>
          <p>
            My academic journey has equipped me with a strong foundation in programming 
            languages, web development, and database management. I enjoy building clean, 
            efficient, and user-friendly applications that solve practical problems.
          </p>
          <p>
            When I'm not coding, you can find me on the soccer field, where I channel my 
            competitive spirit and teamwork skills. The discipline and strategic thinking 
            I've developed through soccer complement my approach to software development.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-black dark:border-white">
          <p className="text-sm opacity-70">
            <strong>University:</strong> Southwestern University PHINMA<br />
            <strong>Course:</strong> Bachelor of Science in Information Technology (BSIT)<br />
            <strong>Role:</strong> IT Student / Aspiring Software Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

