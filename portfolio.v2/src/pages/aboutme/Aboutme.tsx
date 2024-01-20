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

        <VerticalTimeline lineColor="#535C5A  " layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            icon={<img src="../../src/assets/images/skillz.jpg"></img>}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Skills
            </div>

            <div className="vertical-timeline-element-subtitle">
              <div className="flex flex-wrap justify-center">

                <img src="https://skillicons.dev/icons?i=express,nodejs"></img>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Work Experience
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Education
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Resume
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Aboutme;
