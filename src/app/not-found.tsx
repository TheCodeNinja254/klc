"use client";

import { Box, useTheme } from "@mui/material";
import { NotFound } from "@/components/common";

const Page = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: theme.spacing(30) }}>
      <NotFound />
    </Box>
  );
};

export default Page;
