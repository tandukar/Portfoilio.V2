import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Aboutme = () => {
  return (
    <div className="flex items-center justify-center text-justify h-screen">
      <div className="w-custom">
        <h2 className="flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl ">
            01 <span className="text-3xl text-bold">.</span>
          </span>
          About Me
        </h2>

        {/* Timeline */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Skills"
          >
            <h2 className="vertical-timeline-element-title">Your Skills</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Work Experience"
          >
            <h2 className="vertical-timeline-element-title">Your Work Experience</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Education"
          >
            <h2 className="vertical-timeline-element-title">Your Education</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Resume"
          >
            <h2 className="vertical-timeline-element-title">Your Resume</h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* End Timeline */}
      </div>
    </div>
  );
};

export default Aboutme;
