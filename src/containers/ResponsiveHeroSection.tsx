"use client";

import { Box } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import { HeroSection, MobileHeroSection } from "@/components/main";

const ResponsiveHeroSection = () => {
  const isMobile = useIsMobile();

  return <Box>{isMobile ? <MobileHeroSection /> : <HeroSection />}</Box>;
};

export default ResponsiveHeroSection;
