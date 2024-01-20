import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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

        <VerticalTimeline lineColor={" #33BFA8"} layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#33BFA8  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title">
              <p className="text-white ">Your Skills</p>
            </div>

            <div className="vertical-timeline-element-subtitle"></div>
            <p className="text-white">
              MERN, Redux Toolkit, Tailwind CSS, Python, Django, HTML, CSS,
              Bootstrap, MySql, postgresql
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#115e59",

              color: "#146833  ",
            }}
            contentArrowStyle={{ borderRight: "7px solid #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            date="Work Experience"
          >
            <h2 className="vertical-timeline-element-title">
              Your Work Experience
            </h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#115e59",

              color: "#146833  ",
            }}
            contentArrowStyle={{ borderRight: "7px solid #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            date="Education"
          >
            <h2 className="vertical-timeline-element-title">Your Education</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#115e59",
              color: "#146833  ",
            }}
            contentArrowStyle={{ borderRight: "7px solid #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            date="Resume"
          >
            <h2 className="vertical-timeline-element-title">Your Resume</h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Aboutme;
