import classes from "./Week.module.css";
import Image from "next/image";
import { useContext } from "react";
import StoreContext from "./store-context";

const Week = () => {
  const { dataDays } = useContext(StoreContext);

  const stringDate = (data) => {
    const str = new Date(data)
      .toLocaleDateString("en-us", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
      .replace(",", "")
      .split(" ");
    const weekday = str[0].slice(0, 3);
    const month = str[1].slice(0, 3);
    return `${weekday}, ${str[2]} ${month}`;
  };

  return (
    <div className={classes.container}>
      {dataDays &&
        dataDays.list.map((e, i) => {
          if (i % 8 === 0) {
            return (
              <div key={i}>
                <h3>{i === 0 ? "Tomorrow" : stringDate(e.dt_txt)}</h3>
                <Image
                  src={`/img/${e.weather[0].icon.replace(
                    "n",
                    "d"
                  )}.png`}
                  width={56}
                  height={62}
                  alt=""
                />
                <h4>
                  {e.main.temp_max.toFixed(0)}°C{" "}
                  <span>{e.main.temp_min.toFixed(0)}°C</span>
                </h4>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Week;
