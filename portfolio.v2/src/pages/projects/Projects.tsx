// import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import "./Projects.css";
// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }: { id: number }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 500);

//   return (
//     <section>
//       <div ref={ref}>
//         <img src={`/${id}.jpg`} alt="A London skyscraper" />
//       </div>
//       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//     </section>
//   );
// }

// const Projects = () => {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <div className="bg-red-500">
//         {[1, 1].map((image) => (
//           <Image id={image} />
//         ))}
//         <motion.div className="progress" style={{ scaleX }} />
//     </div>
//   );
// };

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 500);

  return (
    <section className="h-screen flex justify-center items-center">
      <div>
        <img className="w-72 h-96" src={`/${id}.jpg`} alt={`Project ${id}`} />
      </div>
      <h2 className="text-3xl font-bold text-red-600">
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      </h2>
    </section>
  );
}

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="">
      Selected Works
      {[1, 1, 1, 1].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
};

export default Projects;
