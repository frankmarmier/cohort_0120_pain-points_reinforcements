import React from "react";
import ClassCounter from "../Components/ClassCounter";
import HookCounter from "../Components/HookCounter";
// import Button from "../Components/Button";

const Intro = props => {
  return (
    <section className="container">
      <h1 className="title">Intro Page</h1>
      <div className="text-align-center"></div>
      <div className="counters">
        <ClassCounter />
        <HookCounter />
      </div>
    </section>
  );
};

export default Intro;
