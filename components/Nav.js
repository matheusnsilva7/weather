"use client";
import { useContext, useState } from "react";
import classes from "./Nav.module.css";
import StoreContext from "./store-context";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const { setLat, setLon, setType, setPlace } = useContext(StoreContext);

  const myLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    setType("latlon");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPlace(e.target[0].value);
    setType("place");
    setMobile(false);
  };

  const place = (place) => {
    setPlace(place);
    setType("place");
    setMobile(false);
  };
  return (
    <div className={classes.container}>
      <button className={classes.btnSearch} onClick={() => setMobile(true)}>
        Search for places
      </button>
      <span
        className={`material-symbols-outlined ${classes.mylocation}`}
        onClick={myLocation}
      >
        my_location
      </span>
      <div className={`${classes.mobile} ${mobile ? classes.active : ""}`}>
        <span
          className="material-symbols-outlined"
          onClick={() => setMobile(false)}
        >
          close
        </span>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" id="search" placeholder="search location" />
          </label>
          <button>Search</button>
        </form>
        <button className={classes.btn} onClick={() => place("london")}>
          <span>London</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        <button className={classes.btn} onClick={() => place("barcelona")}>
          <span>Barcelona</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        <button className={classes.btn} onClick={() => place("long beach")}>
          <span>Long Beach</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
