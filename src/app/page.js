"use client";
import classes from "./page.module.css";
import Home from "../../components/Home";
import Section from "../../components/Section";

export default function App() {
  return (
    <div className={classes.container}>
      <Home />
      <Section />
    </div>
  );
}
