"use client";

import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import imgSchoolBuilding from "@/assets/images/main/imgSchoolBuilding.png";

const StorySection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 1, md: 2 },
        bgcolor: "#F9FAFB",
        overflow: "hidden",
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ position: "relative" }}>
          {/* Top Blue Card - Lifted Above */}
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              zIndex: 3,
              border: "10px solid #ffffff",
              bgcolor: "#A9D6FF",
              borderRadius: { xs: "24px", md: "32px" },
              p: { xs: 2, sm: 3, md: 4 },
              mx: { xs: 3, sm: 5, md: 20 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "28px", md: "36px", lg: "42px" },
                color: "#1F1B62",
                mb: { xs: 2, md: 3 },
              }}
            >
              Our Story
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px", lg: "12px" },
                color: "#1F1B62",
                lineHeight: "26px",
                mb: 2.5,
                maxWidth: "850px",
                mx: "auto",
              }}
            >
              At Konza Learning Centre, we believe every child deserves an
              education that nurtures their unique potential. Through playful
              learning, hands-on exploration, and the guiding principles of our
              M.A.R.K values, we create an environment where curiosity
              flourishes and confidence grows.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px", lg: "12px" },
                color: "#1F1B62",
                lineHeight: "26px",
                maxWidth: "850px",
                mx: "auto",
              }}
            >
              Our dedicated educators and vibrant community work together to
              prepare young minds for a future full of
              possibilities—academically, emotionally, and socially.
            </Typography>
          </Paper>

          {/* Parent Card with Background Image */}
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              borderRadius: { xs: "24px", md: "32px" },
              top: { xs: "-100px", md: "-200px" },
              overflow: "hidden",
              height: { xs: "350px", sm: "400px", md: "450px", lg: "500px" },
              backgroundImage: `url(${imgSchoolBuilding.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              pb: { xs: 3, md: 4 },
            }}
          >
            {/* Subtle Gradient Overlay for Button Contrast */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "150px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Book a Parent Tour Button */}
            <Button
              variant="contained"
              size="large"
              sx={{
                position: "relative",
                zIndex: 2,
                bgcolor: "white",
                color: "#1F1B62",
                fontWeight: 600,
                fontSize: { xs: "14px", md: "16px" },
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 1.8 },
                borderRadius: 8,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                "&:hover": {
                  bgcolor: "#F5F7F8",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Book a Parent Tour
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default StorySection;
