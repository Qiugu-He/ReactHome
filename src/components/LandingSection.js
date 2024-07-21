import React from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Typist from 'react-typist-component';

const greeting1 = "Hello! I'm Qiugu He. 👋";
const greeting2 = "A full stack developer.";

const bio1 = "Welcome to this web page where I am creating various small react apps to solidify my react knowledges. ";
const bio2 = "By clicking the links under each app, you will be able to play with the app or view the source code on Github.";
const bio3 = "Thank you for visiting, and hope have a wonderful day! 😊";

const textStyle = {fontWeight: 'normal',};
const scrollToSection = () => {
  const desiredSection = document.getElementById('projects-section');
  desiredSection.scrollIntoView({ behavior: 'smooth' });
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="white"
    color="black"
    className="bg-transparent"
  >
    <VStack spacing={20}>
      <VStack>
          <Typist>
            <Heading size="xl">{greeting1}</Heading>
            <Heading size="xl">{greeting2}</Heading>
          </Typist>
      </VStack>

      <VStack >
          <Heading className="lead typist" size="l" style={textStyle}>{bio1}</Heading>
          <Heading className="lead typist" size="l" style={textStyle}>{bio2}</Heading>
          <Heading className="lead typist" size="l" style={textStyle}>{bio3}</Heading>
      </VStack>

      <VStack >
          <Button colorScheme='teal' variant='outline' onClick={scrollToSection} marginTop={"20"}>
            Discover Apps
          </Button>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;