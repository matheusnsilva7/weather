import Nav from "./Nav";
import classes from "./Home.module.css";
import Image from "next/image";
import StoreContext from "./store-context";
import { useContext } from "react";

const Home = () => {
  const { data } = useContext(StoreContext);
  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <Image
          src="/../public/img/Cloud-background.png"
          width={563}
          height={326}
          alt="background"
          priority={true}
        />
        <Image
          src={`/../public/img/${
            data ? data.weather[0].icon.replace("n", "d") : "01d"
          }.png`}
          width={200}
          height={220}
          alt=""
        />
        <h1>
          {data ? data.main.temp.toFixed(0) : 0}
          <span>°C</span>
        </h1>
        <div className={classes.information}>
          <h3>{data ? data.weather[0].description : "weather"}</h3>
          <div className={classes.day}>
            <span>Today</span>.<span>{date}</span>
          </div>
          <div className={classes.place}>
            <span className="material-symbols-outlined">location_on</span>
            <span>{data ? data.name : "city"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
