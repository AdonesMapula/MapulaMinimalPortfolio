import PrintButton from '../components/PrintButton';

const CoverLetter = () => {
  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      id="cover-letter"
      className="py-20 px-4 sm:px-6 lg:px-8 print:py-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="no-print mb-8 flex justify-center">
          <PrintButton label="Print Cover Letter" onClick={handlePrint} />
        </div>

        <div className="cover-letter-content space-y-6 text-base leading-relaxed">
          <div className="text-right text-sm opacity-70">
            <p>{currentDate}</p>
          </div>

          <div>
            <p className="mb-4">
              [Hiring Manager Name]<br />
              [Company Name]<br />
              [Company Address]
            </p>
          </div>

          <div>
            <p className="mb-4">Dear [Hiring Manager Name],</p>
          </div>

          <div className="space-y-4">
            <p>
              I am writing to express my interest in the [Position Title] position 
              at [Company Name]. As a Bachelor of Science in Information Technology 
              student at Southwestern University PHINMA, I am eager to apply my 
              technical skills and passion for software development to contribute to 
              your team's success.
            </p>

            <p>
              Throughout my academic journey, I have developed a strong foundation 
              in various programming languages including Java, JavaScript, Python, 
              and Kotlin. I have hands-on experience with modern web technologies 
              such as React JS, React Native, HTML, CSS, and Tailwind CSS, as well 
              as database management using SQL. My projects demonstrate my ability 
              to build full-stack applications, create responsive user interfaces, 
              and implement efficient database solutions.
            </p>

            <p>
              What sets me apart is my commitment to writing clean, maintainable code 
              and my ability to work collaboratively in team environments. My experience 
              playing soccer has taught me the importance of teamwork, communication, 
              and strategic thinking—skills that I bring to every project I undertake.
            </p>

            <p>
              I am excited about the opportunity to contribute to [Company Name] and 
              grow as a software developer. I am confident that my technical skills, 
              enthusiasm for learning, and dedication to excellence make me a strong 
              candidate for this position.
            </p>

            <p>
              Thank you for considering my application. I look forward to the 
              opportunity to discuss how my skills and experiences align with your 
              team's needs.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-2">Sincerely,</p>
            <p className="font-semibold">Adones Mapula</p>
            <p className="text-sm opacity-70 mt-2">
              IT Student / Aspiring Software Developer<br />
              Southwestern University PHINMA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;

