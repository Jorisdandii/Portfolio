import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experiences = () => {
  return (
    <div className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-[green] opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          Experiences.
        </p>
      </span>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  #ff9301" }}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff9301", color: "#000000" }}
          date="Jun 2023 - May 2024"
          iconStyle={{ background: "#ff9301", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Smart Solutions Co, LTD
          </h4>
          <p>• Full Stack Developer</p>
          <p>
            • I designed and built complete web applications using the MERN
            stack, encompassing the front-end and back-end components. I
            utilized modern front-end technologies like React and CSS frameworks
            to develop visually appealing and responsive user interfaces. For
            seamless data communication between the front-end and backend
            systems, I developed robust RESTful APIs. I also created and
            optimized database schemas, implemented data models, and wrote
            intricate queries using MongoDB or other NoSQL databases.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid rgb(16, 204, 82)" }}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#000" }}
          date="Sep 2022 - Jun 2023"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Front-end</h3>
          <h4 className="vertical-timeline-element-subtitle">Web Solution</h4>
          <p>• FrontEnd developer HTML, CSS, JavaScript, React</p>
          <p>
            • Translated design wireframes and mockups into pixel-perfect and
            interactive user interfaces using React.js and other front-end
            frameworks. Implemented responsive designs and optimized web
            applications for various devices and screen sizes. Collaborated with
            UX/UI designers to ensure seamless integration of visual designs and
            user experience.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          date="So Jan 2022 - Sep 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Front-end</h3>
          <h4 className="vertical-timeline-element-subtitle">
            ftCity IT company
          </h4>
          <p>• Frontend Developer HTML, CSS, JavaScript, React</p>
          <p>
            • Built and maintained company's website using HTML, CSS,
            JavaScript, React and other front-end technologies. Utilized
            responsive design techniques to ensure website is mobile-friendly.
            Collaborated with the design team to implement custom graphics,
            animations and transitions Collaborated with UX/UI designers to
            ensure seamless integration of visual designs and user experience.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experiences;
