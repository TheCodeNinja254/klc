"use client";

import {Box, Typography, useTheme} from "@mui/material";

const Page = () => {
  const theme = useTheme();

  return (
      <Box sx={{marginTop: theme.spacing(5)}}>
        <Typography>Hello World - This is the dashboard</Typography>
      </Box>
  )
}

export default Page;
