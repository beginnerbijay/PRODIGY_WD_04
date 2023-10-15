const HeroSection = () => {
    return (
      <section className="relative py-20 overflow-hidden" id="#">
        <div className="absolute inset-0 bg-[#1F4172] mix-blend-multiply" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto p-4 sm:px-6">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">D Bijayashakti Patro</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                  Passionate Web Developer
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none z-0">
          <div className="absolute left-1/4 sm:left-2/4">
            <img
              src="https://user-images.githubusercontent.com/53929918/275345667-bf1371ee-8201-408e-93a9-e488d0625e90.jpg"
              alt="Profile"
              className="h-3/5 w-3/5 shadow-lg pic-image"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  