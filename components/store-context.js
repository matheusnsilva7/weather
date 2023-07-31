import { createContext, useState, useEffect } from "react";

const StoreContext = createContext({
  data: {},
  dataDays: {},
  lat: 0,
  setLat: () => {},
  lon: 0,
  setLon: () => {},
  type: "",
  setType: () => {},
  place: "",
  setPlace: () => {},
  degree: "",
  setDegree: () => {},
});

export const StoreContextProvider = (props) => {
  const [lat, setLat] = useState(60.192059);
  const [data, setData] = useState();
  const [dataDay, setDataDay] = useState();
  const [lon, setLon] = useState(24.945831);
  const [type, setType] = useState("place");
  const [place, setPlace] = useState("Helsinki");
  const [degree, setDegree] = useState("℃");

  useEffect(() => {
    getData();
    getDataDay();
  }, [lat, lon, place, degree]);

  const getData = async () => {
    const url =
      type === "place"
        ? `https://api.openweathermap.org/data/2.5/weather?q=${place}${
            degree === "℃" ? "&units=metric" : "&units=imperial"
          }&appid=f26a1d2c7387a78efdda84903fecbb7f`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${
            degree === "℃" ? "&units=metric" : "&units=imperial"
          }&appid=f26a1d2c7387a78efdda84903fecbb7f`;
    const res = await fetch(url);
    const datas = await res.json();
    setData(datas);
    setLat(datas.coord.lat);
    setLon(datas.coord.lon);
  };

  const getDataDay = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${
        degree === "℃" ? "&units=metric" : "&units=imperial"
      }&appid=f26a1d2c7387a78efdda84903fecbb7f`
    );
    const datas = await res.json();
    setDataDay(datas);
  };

  return (
    <StoreContext.Provider
      value={{
        data: data,
        dataDays: dataDay,
        lat: lat,
        setLat: setLat,
        lon: lon,
        setLon: setLon,
        type: type,
        setType: setType,
        place: place,
        setPlace: setPlace,
        degree: degree,
        setDegree: setDegree,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
