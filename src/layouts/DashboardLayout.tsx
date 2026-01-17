import React from "react";
import {Box} from "@mui/material";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <Box>
          {children}
      </Box>
  )
}

export default DashboardLayout;
