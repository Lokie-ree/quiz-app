import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const RobotAnimation = () => {
  const animationData = require("../../public/animations/ai-robot.json");
  return (
    <div className="w-56 mx-auto mb-4">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default RobotAnimation;
