"use client";

import { Box, useTheme } from "@mui/material";
import {
  EducationSection,
  GlanceSection,
  HeroSection,
  HighlightsSection,
  JourneySection,
  ProgrammesSection,
  ProgrammeContentSection,
  StorySection,
} from "@/components/main";

const Page = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: theme.spacing(-10) }}>
      <HeroSection />
      <HighlightsSection />
      <EducationSection />
      <GlanceSection />
      <ProgrammesSection />
      <ProgrammeContentSection />
      <StorySection />
      <JourneySection />
    </Box>
  );
};

export default Page;
