import Navbar from "../components/Navbar"
import sudipImage from "../assets/sudip.jpg" // Add this import

function About(){
    return(
<>
<Navbar/>
<section id="about" className="min-h-screen flex items-center justify-center py-10">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-8 text-center text-shadow" data-aos="fade-down">About Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right">
        <img src={sudipImage} alt="Profile" className="rounded-lg shadow-lg" /> {/* Use imported variable */}
      </div>
      <div data-aos="fade-left">
        <p className="text-lg mb-6">
          I'm a passionate web developer with a keen eye for design. With years of experience in creating
          stunning and functional websites, I strive to bring ideas to life through code.
        </p>
        <p className="text-lg mb-6">
          My expertise includes HTML, CSS, JavaScript, and various modern frameworks. I'm always
          eager to learn new technologies and push the boundaries of web development.
        </p>
        <div className="flex space-x-4">
          <i className="fab fa-html5 text-4xl" />
          <i className="fab fa-css3-alt text-4xl" />
          <i className="fab fa-js-square text-4xl" />
          <i className="fab fa-react text-4xl" />
          <i className="fab fa-node-js text-4xl" />
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )
}
export default About