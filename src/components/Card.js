import { Button, Link as ChakraLink, Divider, Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Link as RouterLink } from 'react-router-dom';
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, skills, imageSrc, githubLink, demoLink}) => {
  const cardProperty = {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "Black",
  }
  return (
    <HStack style={cardProperty} spacing="4">
      <VStack  >
        <Image objectFit="cover" src={imageSrc} alt={title} borderRadius="10px" />
        <VStack style={{padding: '15px'}} alignItems="flex-start">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text>{skills}</Text>
          <CardButtons githubLink={githubLink} demoLink={demoLink} />
        </VStack>
      </VStack>
    </HStack>
  );
};

//CardButtons
const CardButtons = ({ githubLink, demoLink }) => {
  return (
    <div className="d-grid gap-6 d-md-block">
      <ChakraLink href={githubLink} isExternal as="a">
        <Button colorScheme='teal' variant='outline' marginRight="2">
          <Box display="inline" marginRight="2">
            <FontAwesomeIcon key={githubLink} icon={faGithub} size="1x" />
          </Box>
          Repo
        </Button>
      </ChakraLink>

      <ChakraLink href={demoLink} isExternal as="a">
        <Button colorScheme='teal' variant='outline'>
            Demo
            <Box display="inline" marginLeft="2">
              <FontAwesomeIcon key={demoLink} icon={faArrowRight} size="1x" />
            </Box>
          </Button>
      </ChakraLink>
    </div>
  );
};

export default Card;