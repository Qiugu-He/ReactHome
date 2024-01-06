import React from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Typist from 'react-typist-component';

const greeting1 = "Hello! I'm Qiugu He. 👋";
const greeting2 = "A full stack developer.";

const bio1 = "Welcome to this web page where I built varies small react apps to improving my react skills. ";
const bio2 = "You can click the link to go to the github react repo or just click the demo link to play the app for fun.";
const bio3 = "Thank you for visiting, and have a great day! 😊";

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
            Discover projects
          </Button>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;