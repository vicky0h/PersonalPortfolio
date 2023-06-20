import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Technical Skills</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className="text-secondary ml-6">{technology.name}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
