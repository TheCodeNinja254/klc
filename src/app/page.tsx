"use client";

import { Box, useTheme } from "@mui/material";
import {
  EducationSection,
  HeroSection,
  HighlightsSection,
} from "@/components/main";

const Page = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: theme.spacing(-10) }}>
      <HeroSection />
      <HighlightsSection />
      <EducationSection />
    </Box>
  );
};

export default Page;
