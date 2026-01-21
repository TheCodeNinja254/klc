"use client";

import { Box, useTheme } from "@mui/material";
import {
  EducationSection,
  GlanceSection,
  HighlightsSection,
  JourneySection,
  ProgrammesSection,
  ProgrammeContentSection,
  StorySection,
  MobileValueCard,
} from "@/components/main";
import ResponsiveHeroSection from "@/containers/ResponsiveHeroSection";

const Page = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: theme.spacing(-10) }}>
      <ResponsiveHeroSection />
      <MobileValueCard />
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
