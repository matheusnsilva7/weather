import { useContext } from "react";
import classes from "./Hightlights.module.css";
import StoreContext from "./store-context";

const Hightlights = () => {
  const { data } = useContext(StoreContext);
  return (
    <div className={classes.container}>
      <h2>Today’s Hightlights </h2>
      <div>
        <h3>Wind status</h3>
        <span>
          {data ? data.wind.speed : 0}
          <span>mph</span>
        </span>
        <div className={classes.link}>
          <span
            className="material-symbols-outlined"
            style={{ transform: `rotate(${data ? data.wind.deg : 0}deg)` }}
          >
            assistant_navigation
          </span>
          <span>WSW</span>
        </div>
      </div>
      <div>
        <h3>Humidity</h3>
        <span>
          {data ? data.main.humidity : 0}
          <span>%</span>
        </span>
        <div className={classes.humidity}>
          <span>0</span>
          <span>50</span>
          <span>100</span>
          <div
            style={{
              background: `linear-gradient(to right, #FFEC65 0% ${
                data ? data.main.humidity : 0
              }% , #E7E7EB ${data ? data.main.humidity : 0}% 100%)`,
            }}
          ></div>
          <span>%</span>
        </div>
      </div>
      <div>
        <h3>Visibility</h3>
        <span>
          {data ? data.visibility : 0}
          <span>miles</span>
        </span>
      </div>
      <div>
        <h3>Air Pressure</h3>
        <span>
          {data ? data.main.pressure : 0} <span>mb</span>
        </span>
      </div>
      <p>created by username - devChallenges.io</p>
    </div>
  );
};

export default Hightlights;
