import React from "react";
import { Box } from "@mui/material";
import {
  AboutHeroSection,
  CoreValuesSection,
  VisionMissionSection,
  OurPromiseSection,
  MARKValuesSection,
  OurTeamSection,
} from "@/components/about";

const AboutPage = () => {
  return (
    <Box>
      <AboutHeroSection />
      <CoreValuesSection />
      <VisionMissionSection />
      <OurPromiseSection />
      <MARKValuesSection />
      <OurTeamSection />
    </Box>
  );
};

export default AboutPage;
