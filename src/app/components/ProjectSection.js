const Project = ({ title, imageUrl, description, githubUrl, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center mt-10`}>
      <div className="md:w-1/2">
        <img className="w-full h-auto" src={imageUrl} alt={title} />
      </div>
      <div className="md:w-1/2 md:px-10">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Responsive Landing Page',
      imageUrl: 'https://user-images.githubusercontent.com/53929918/275336581-495d01de-5b37-4e9a-a439-f7a017f13ee6.png',
      description: 'The responsive landing page is a dynamic web application showcasing a fictional business. Developed using HTML, CSS, and JavaScript, the page boasts an intuitive design and interactive features, offering seamless navigation through an engaging hero section, detailed service displays, and project highlights. Its responsive layout ensures accessibility across devices, providing users with an immersive and informative browsing experience.',
      githubUrl: 'https://github.com/beginnerbijay/PRODIGY_WD_01',
    },
    {
      title: 'Stopwatch web Application',
      imageUrl: 'https://user-images.githubusercontent.com/53929918/275337037-eb8fd177-093b-4f46-b494-1dd6f640ca27.png',
      description: "The Stopwatch web application is a user-friendly tool designed for accurate time measurement and interval tracking. Utilizing HTML, CSS, and JavaScript, the application offers functions for starting, pausing, and resetting the stopwatch, along with the ability to record and display lap times. With its interactive features and intuitive interface, users can effectively manage time intervals and monitor elapsed durations. The application's seamless functionalities make it a versatile tool for various time-related tasks, enhancing productivity and time management for users.",
      githubUrl: 'https://github.com/beginnerbijay/PRODIGY_WD_02',
    },
    {
      title: 'Tic-Tac-Toe Web application',
      imageUrl: 'https://user-images.githubusercontent.com/53929918/275337253-ffd283a9-6366-41aa-8176-18722cadd473.png',
      description: 'The Tic-Tac-Toe web application is an engaging game platform built with HTML, CSS, and JavaScript. Designed to offer users an interactive gaming experience, the application enables players to enjoy the classic tic-tac-toe game either against an AI opponent or against another player. With functions to handle user clicks, track game states, and determine winning conditions, the application provides a seamless and entertaining gaming experience. Its intuitive design and responsive gameplay mechanics make it a fun and challenging choice for users looking to enjoy a timeless game of strategy and skill.',
      githubUrl: 'https://github.com/beginnerbijay/PRODIGY_WD_03',
    },
    {
      title: 'Weather App',
      imageUrl: 'https://user-images.githubusercontent.com/53929918/275337799-11f4e2d6-75f7-4847-8931-883ee67392e3.png',
      description: 'The Weather web application is a dynamic platform developed using Next.js and Tailwind CSS, designed to provide users with real-time weather data based on location input. With an intuitive and visually appealing design, the application fetches data from a weather API, displaying current weather conditions, temperature, and other relevant information. Its user-friendly interface allows for easy location input, ensuring accurate and up-to-date weather information for users. With its seamless integration of Next.js and Tailwind CSS, the application delivers an immersive and informative weather tracking experience for users.',
      githubUrl: 'https://github.com/beginnerbijay/PRODIGY_WD_05',
    },
  ];

  return (
    <section className="bg-gray-100 py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800">Projects</h2>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              githubUrl={project.githubUrl}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
