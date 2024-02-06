import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Jennie</span>👋
      <br />A Front-end Engineer from Massachusetts.
    </h1>
  ),
  2: (
    <InfoBox
      text="Over the past year I went from knowing only HTML/CSS to JavaScript, Node.js, React, UI libraries, etc., but still in a path of constant learning."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="As a self-taught software engineer, I have been trying out many things and created tons of projects for fun, but most importantly to learn. Curious about my amazing projects?"
      link="/projects"
      btnText="Go to projects"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or an enthusiastic candidate to move forward with your team of developers together? I'm just an email away!"
      link="/contact"
      btnText="Get in touch!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
