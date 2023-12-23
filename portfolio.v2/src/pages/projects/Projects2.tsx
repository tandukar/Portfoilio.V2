import { motion, useAnimation } from "framer-motion";

const Projects2 = () => {
  const controls1 = useAnimation();
  const controls = useAnimation();

  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <motion.div
        className="h-3/4 w-60 bg-green-700"
        onHoverStart={() => controls.start({ scaleX: 2.1, transformOrigin: "left" })}
        onHoverEnd={() => controls.start({ scaleX: 1 })}
        animate={controls}
        transition={{ type: "tween", stiffness: 100, damping: 10 }}
      />
      <motion.div
        className="h-3/4 w-60 bg-slate-700"
        whileHover={{ scaleX: 3.2}}
        transition={{ type: "tween", stiffness: 100, damping: 10 }}
      />
      <motion.div
        className="h-3/4 w-60 bg-violet-300"
        onHoverStart={() => controls1.start({ scaleX: 2.1, transformOrigin: "right" })}
        onHoverEnd={() => controls1.start({ scaleX: 1 })}
        animate={controls1}
        transition={{ type: "tween", stiffness: 100, damping: 10 }}
      />
    </div>
  );
};

export default Projects2;
