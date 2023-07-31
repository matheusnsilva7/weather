import Hightlights from "./Hightlights";
import Week from "./Week";
import classes from "./Section.module.css";
import StoreContext from "./store-context";
import { useContext } from "react";

const Section = () => {
  const { degree, setDegree } = useContext(StoreContext);
  return (
    <div className={classes.container}>
      <div className={classes.conversion}>
        <button
          className={`${degree === "℃" ? classes.active : ""}`}
          onClick={() => setDegree("℃")}
        >
          ℃
        </button>
        <button
          className={`${degree === "℉" ? classes.active : ""}`}
          onClick={() => setDegree("℉")}
        >
          ℉
        </button>
      </div>
      <Week />
      <Hightlights />
    </div>
  );
};

export default Section;
