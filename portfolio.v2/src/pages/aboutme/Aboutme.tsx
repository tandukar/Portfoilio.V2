import React from "react";

const MyDescription = () => {
  return (
    <div className="flex items-center justify-center text-justify">
      <div className="w-custom mx-auto p-4">
        <h2 className=" flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl  ">
            01 <span className="text-3xl text-bold">.</span>
          </span>
          About Me
        </h2>
        <p className="mb-4">
          My name is [Your Name], and I enjoy creating things that live on the
          internet. My journey into [specific details, e.g., web development]
          started back in [Year] when [mention a specific experience, e.g., I
          decided to try editing custom Tumblr themes]. Turns out, [share a
          lesson learned, e.g., hacking together a custom reblog button taught
          me a lot about HTML & CSS]! Fast-forward to today, and I’ve had the
          privilege of [mention a few experiences, e.g., working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio]. My main focus these days is [current focus, e.g.,
          building accessible, inclusive products and digital experiences at
          [Your Current Workplace] for a variety of clients]. I also recently
          [mention a recent accomplishment, e.g., launched a course] that covers
          everything you need to [specific details, e.g., build a web app with
          the Spotify API using Node & React].
        </p>
        <p className="mb-2">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="flex flex-row-2 items-center justify-center">
            <div>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>JavaScript</li>
          </div>
          <div>
          <li>Python</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MyDescription;
