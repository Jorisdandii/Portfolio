import { styles } from "../../../utils/tailwind_variables";
import logo from "../../../assets/images/logo.png";
import ReactTyped from "react-typed";
const Hero = () => {
  return (
    <section
      className={`h-screen ${styles.flex} justify-between px-16`}
      id="home"
    >
      <div className="hero_top w-1/2 text-center">
        <h1 className="text-xl text-kulrang_text">Hello there...</h1>
        <h1 className="text-7xl py-5  font-gagalin">
          Tangirov <span className="text-lime-600">Sirojiddin</span>
        </h1>
        <ReactTyped
          strings={["Front-End", "Back-End"]}
          typeSpeed={100}
          loop
          backSpeed={30}
          cursorChar="|"
          showCursor={true}
          className={`text-3xl text-lime-600 font-medium`}
        />
        <p className="text-kulrang_text pt-5">
          As a software developer based in Seoul, I specialize in building
          responsive and user-friendly web-applications using JavaScript,
          TypeScript, My expertise includes React for dynamic web interfaces and
          the integration and customization of APIs. I leverage Next.js to
          create optimized and SEO-friendly web applications, Express.js and
          Node Js for robust back-end solutions, and MongoDB and PostgreSQL for
          efficient data management. I thrive on technical challenges and bring
          a proactive, problem-solving mindset to every project. I’m passionate
          about exploring innovative projects that advance the technological
          landscape. I'd love to connect and discuss potential opportunities for
          collaboration!
        </p>
      </div>
      <div className="w-1/2 ">
        <img src={logo} alt="logo" className="w-1/2 m-auto hero_img" />
      </div>
    </section>
  );
};

export default Hero;
