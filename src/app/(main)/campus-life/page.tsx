import React from "react";
import { Box } from "@mui/material";
import {
  CampusLifeHero,
  CampusFacilitiesSection,
  OurCultureSection,
  StudentLifeSection,
} from "@/components/campusLife";

const CampusLifePage = () => {
  return (
    <Box>
      <CampusLifeHero />
      <CampusFacilitiesSection />
      <OurCultureSection />
      <StudentLifeSection />
    </Box>
  );
};

export default CampusLifePage;
