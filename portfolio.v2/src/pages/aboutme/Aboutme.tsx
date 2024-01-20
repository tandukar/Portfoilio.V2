import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineDatabase } from "react-icons/ai";
import {
  faReact,
  faNodeJs,
  faJs,
  faPython,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const SkillBadge = ({ icon, text }: { icon: IconDefinition; text: string }) => {
  return (
    <div className="flex items-center m-2">
      <FontAwesomeIcon icon={icon} size="2x" className="mr-2" />
      <span className="text-white">{text}</span>
    </div>
  );
};

const Aboutme = () => {
  return (
    <div className="flex items-center justify-center text-justify h-screen ">
      <div className="w-custom">
        <h2 className="flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl ">
            01 <span className="text-3xl text-bold">.</span>
          </span>
          About Me
        </h2>

        <VerticalTimeline lineColor="#535C5A  " layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Skills
            </div>

            <div className="vertical-timeline-element-subtitle">
              <div className="flex flex-wrap justify-center">
                <SkillBadge icon={faReact} text="MERN" />
                <SkillBadge icon={faJs} text="Redux Toolkit" />
                <SkillBadge icon={faJs} text="JavaScript" />
                <SkillBadge icon={faNodeJs} text="Node.js" />
                <SkillBadge icon={faPython} text="Python" />
                <SkillBadge icon={faHtml5} text="HTML" />
                <SkillBadge icon={faCss3} text="CSS" />
                <SkillBadge icon={faBootstrap} text="Bootstrap" />
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            Your Work Experience


            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            Your Education
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            Your Resume
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Aboutme;
