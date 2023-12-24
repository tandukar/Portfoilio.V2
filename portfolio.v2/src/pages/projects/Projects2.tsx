import { motion, useAnimation } from "framer-motion";

const Projects2 = () => {
  const controls1 = useAnimation();
  const controls = useAnimation();
  let isHovered = false;
  const imageUrl =
    "https://images.pexels.com/photos/3571576/pexels-photo-3571576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const imageUrl1 =
    "https://images.pexels.com/photos/2088200/pexels-photo-2088200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const handleHoverStart = () => {
    isHovered = true;
    controls.start({ scaleX: 2.1 });
  };

  const handleHoverEnd = () => {
    isHovered = false;
    controls.start({ scaleX: 1 });
  };

  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <motion.div
        className="h-3/4 w-60"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: isHovered ? "cover" : "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transformOrigin: "left",
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        animate={controls}
        transition={{ type: "tween", stiffness: 100, damping: 10 }}
      />
      <motion.div
        className="h-3/4 w-60 bg-slate-700"
        whileHover={{ scaleX: 3.2 }}
        transition={{ type: "tween", stiffness: 100, damping: 10 }}
      />
      <motion.div
        className="h-3/4 w-60"
        style={{
          backgroundImage: `url(${imageUrl1})`,
          backgroundSize: isHovered ? "cover" : "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transformOrigin: "left",
        }}
        onHoverStart={() =>
          controls1.start({ scaleX: 2.1, transformOrigin: "right" })
        }
        onHoverEnd={() => controls1.start({ scaleX: 1 })}
        animate={controls1}
        transition={{ type: "tween", stiffness: 100, damping: 10 }}
      />
    </div>
  );
};

export default Projects2;
