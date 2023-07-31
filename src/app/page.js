"use client";
import classes from "./page.module.css";
import Home from "../../components/Home";
import Section from "../../components/Section";
import { StoreContextProvider } from "../../components/store-context";

export default function App() {
  return (
    <StoreContextProvider>
      <div className={classes.container}>
        <Home />
        <Section />
      </div>
    </StoreContextProvider>
  );
}
