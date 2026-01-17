"use client";

import {Box, useTheme} from "@mui/material";
import HeroSection from "@/components/main/HeroSection";

const Page = () => {
  const theme = useTheme();

  return (
      <Box sx={{marginTop: theme.spacing(-10)}}>
        <HeroSection />
      </Box>
  )
}

export default Page;
