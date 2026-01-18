"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";

const NotFound = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 3, md: 3 },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "80px", md: "120px", lg: "140px" },
                fontWeight: 700,
                color: "#1F1B62",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              404
            </Typography>

            {/* Page Not Found Text */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "28px", md: "36px", lg: "42px" },
                fontWeight: 700,
                color: "#1F1B62",
                mb: 2,
              }}
            >
              Page Not Found
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#666",
                maxWidth: "600px",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Oops! The page you&#39;re looking for seems to have wandered off.
              Let&#39;s get you back on track to discover our wonderful learning
              programs.
            </Typography>

            <Button
              disableElevation
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={() => router.push("/")}
              sx={{
                mt: 2,
                bgcolor: "#1F1B62",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 8,
                "&:hover": {
                  bgcolor: "#01007B",
                },
              }}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFound;
