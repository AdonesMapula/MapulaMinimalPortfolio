const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrintResume = () => {
    scrollToSection('resume');
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Adones Mapula
        </h1>
        <p className="text-lg md:text-xl mb-12 opacity-80">
          BSIT Student • Software Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="border border-black dark:border-white px-8 py-3 hover:opacity-70 transition-opacity no-print"
          >
            View Projects
          </button>
          <button
            onClick={handlePrintResume}
            className="border border-black dark:border-white px-8 py-3 hover:opacity-70 transition-opacity no-print"
          >
            Download / Print Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

