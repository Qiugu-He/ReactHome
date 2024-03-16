import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Youtube Player",
    description:
      "A youtube player that fecthing videos from google API ",
      getImageSrc: () => require("../images/youtubeplayer.png"),
      skills: "React skills used in this app: useState, useEffect, fetching data from API, custom hooks, parent & child component",
  },
  {
    title: "Infinite Image Gallery",
    description:
      "An image gallery by pulling images from Unsplash API. It will load more images as it scroll to the bottom ",
      getImageSrc: () => require("../images/infinitimagegallery.png"),
      skills: "React skills used in this app: Fetching data from API, React state with useState, React effects with useEffect",
  },
  {
    title: "Markdown Editor",
    description:
      "A real-time markdown previewer. ",
      getImageSrc: () => require("../images/markdowneditor.png"),
      skills: "Skills used in this app: React state with useState, Markdonw thired Party Packages",
  },
  {
    title: "Trivia App",
    description:
      "Pulled trivia questions from Open Trivia Database and use them to create a Trivia game ",
      getImageSrc: () => require("../images/triviagame.png"),
      skills: "React skills used in this app: Fetching data from an API, React state with useState(), Custom React Hooks, Parent & child components",
  },
  {
    title: "Calendar Picker",
    description:
      "A calendar picker to handling a start and end time",
      getImageSrc: () => require("../images/calendarpicker.png"),
    skills: "React skills used in this app: CSS-in-JS, React state with useState, component communication",
    githubLink:"https://github.com/Qiugu-He/shoppingRobots",
    demoLink:"https://shopping-robots.vercel.app/"
  },
  {
    title: "Animated Chat Box",
    description:
      "A animated chat box",
      getImageSrc: () => require("../images/chatbox.png"),
      skills: "React skills used in this app: React state with useState, Timer, Animating React",
  },
  {
    title: "Highlighted Tabs",
    description:
      "Using mouse movement to highlight tabs",
      getImageSrc: () => require("../images/highlittabs.png"),
    skills: "React skills used in this app: React Router, React state with useState, React effects with useEffect, Hover events",
  },
  {
    title: "Moving Boxes with Link and Canvas",
    description:
      "Used HTML canvas to draw a Link wiht move",
      getImageSrc: () => require("../images/movinglink.png"),
      skills: "React skills used in this app: HTML canvas, React state with useState, React effects with useEffect, Custom React Hook",
  },
  {
    title: "Paper Rock Scissors",
    description:
      "A Paper, Rock, Scissors game ",
      getImageSrc: () => require("../images/paperrock.png"),
      skills: "React skills used in this app: React state with useState, React effects with useEffect, React renering, Parent and child components, React events",
  },
  {
    title: "Pomodoro Timer",
    description:
      "A Pomodoro timer",
      getImageSrc: () => require("../images/promodoro.png"),
      skills: "React skills used in this app: React state with useState, React effects with useEffect, React refs with useRef, Parent and child components",
  },
  {
    title: "Robot Shopping Store",
    description:
      "A shopping plateform with shopping cart",
    getImageSrc: () => require("../images/robotshop.png"),
    skills: "Skills used in this app: TypeScript, state with useState, useEffect with Axios, useContext, component communication",
    githubLink:"https://github.com/Qiugu-He/shoppingRobots",
    demoLink:"https://shopping-robots.vercel.app/"
  },
];

const textStyle = {
  fontWeight: 'normal',
  color: 'black'
};

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#e5fffa"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h3" id="projects-section" style={textStyle}>
        Apps
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            skills={project.skills}
            imageSrc={project.getImageSrc()}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;