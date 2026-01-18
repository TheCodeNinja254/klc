import React from "react";
import { Box } from "@mui/material";
import {
  CurriculumHeroSection,
  ProgrammesSection,
  CoCurricularActivitiesSection,
} from "@/components/curriculum";

const CurriculumPage = () => {
  return (
    <Box>
      <CurriculumHeroSection />
      <ProgrammesSection />
      <CoCurricularActivitiesSection />
    </Box>
  );
};

export default CurriculumPage;
