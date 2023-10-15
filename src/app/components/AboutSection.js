const AboutSection = () => {
  return (
    <section className="bg-[#F1B4BB] py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800">About Me</h2>
          <p className="text-xl text-gray-700 mb-8">
            I am a passionate web developer and a Computer Science student from Odisha, India. I love working on new and exciting technologies emerging nowadays. I code dynamic web apps that are fully responsive for a great user experience.
          </p>
          <div className="relative wrap overflow-hidden p-10">
            <div className="mb-8 flex justify-center gap-4 flex-row-reverse flex-wrap sm:flex-row">
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-4 sm:mb-0">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="bg-[#FDF0F0] rounded-lg shadow-md w-full sm:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800">Education</h3>
                <p className="text-sm text-gray-700">- Bachelor's in Computer Science from Parala Maharaja Engineering College, Berhampur, Odisha
                  <br />- Junior College from Hi-Tech +2 Science College, Bhubaneswer, Odisha
                  <br />- High School from Saraswati Shishu Vidya Mandhir, Balangir, Odisha
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-center gap-4 flex-row-reverse flex-wrap sm:flex-row">
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-4 sm:mb-0">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div className="bg-[#FDF0F0] rounded-lg shadow-md w-full sm:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800">Experience</h3>
                <p className="text-sm text-gray-700">
                  - Internship at Prodigy Infotech, where I gained hands-on experience in developing responsive web applications using the web stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
