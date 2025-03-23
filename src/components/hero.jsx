import sudipImage from "../assets/sudip.jpg"; // Adjusted path from src/components/

function Section() {
  return (
    <>
      <div>
        <title>NewsLetterLandingPage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <div
          id="container"
          className="p-20 w-auto flex px-24 justify-center relative"
        >
          <div className="mr-10">
            <img
              className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
              src={sudipImage} // Use the imported image
              alt="image of myself"
            />
          </div>
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-white-font-bold text-3xl mt-6 mb-8">
              Hey it's me, Sudip Chaudhary
            </h1>
            <p className="text-dark w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
              I'm Sudip, a 20-year-old high schooler with a passion for web
              development. My tech journey started with HTML, CSS, and
              JavaScript, and I was hooked by the thrill of crafting dynamic,
              interactive websites. As I grew, ReactJS became my go-to tools
              for building scalable applications. Feel free to connect if you
              have questions, collaboration ideas, or just want to discuss the
              latest in web development!
            </p>
            <div
              id="social"
              className="flex flex-wrap justify-start items-center gap-4"
            >
              <a
                rel="noopener"
                target="_blank"
                href="https://github.com/sudiplekhee"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                  width="20px"
                  height="20px"
                  alt="Github"
                />
                <span>Visit my Github</span>
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/sudip-lekhee-4b1590357/"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                  width="20px"
                  height="20px"
                  alt="LinkedIn"
                />
                <span>Follow me on Linkedin</span>
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://twitter.com/ichbinaydin"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                  width="20px"
                  height="20px"
                  alt="Twitter"
                />
                <span>Follow me on Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section