import React from "react";
import { Box } from "@mui/material";
import { Footer, MainAppBar } from "@/components/common";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <MainAppBar />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
