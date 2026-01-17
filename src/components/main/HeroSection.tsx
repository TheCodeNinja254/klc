"use client";
import React from "react";
import { Box, Container, Typography, Button, Chip } from "@mui/material";
import svgPaths from "@/assets/svgIcons/mainSVGIconPaths";
import heroBackground from "@/assets/images/heroBackground.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 15, md: 20 },
        pb: { xs: 10, md: 15 },
        backgroundImage: `url(${heroBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "1018.402px",
          height: "990px",
          left: "-214px",
          top: "-30px",
          zIndex: 0,
        }}
      >
        <svg
          style={{ display: "block", width: "100%", height: "100%" }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1018.4 990"
        >
          <g>
            <path d={svgPaths.p3fa07500} fill="#01007B" fillOpacity="0.7" />
            <path d={svgPaths.p34ba2880} fill="url(#paint0_linear_1_426)" />
            <path d={svgPaths.p2c9089f0} fill="#1F1B62" />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_426"
              x1="256.086"
              x2="686.967"
              y1="6.60275"
              y2="917.97"
            >
              <stop stopColor="#FDFA94" />
              <stop offset="0.13" stopColor="#F6EA80" />
              <stop offset="0.41" stopColor="#EFDA6D" />
              <stop offset="0.66" stopColor="#BCA24C" />
              <stop offset="0.92" stopColor="#C3A251" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: "560px", ml: { xs: 2, md: 5 } }}>
          {/* Excellence Badge */}
          <Chip
            icon={
              <Box sx={{ ml: 1 }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d={svgPaths.p166a700}
                    stroke="#C8A658"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 21H19"
                    stroke="#C8A658"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Box>
            }
            label="Excellence in Early Education"
            sx={{
              height: "50px",
              borderRadius: "33554400px",
              border: "1px solid #C8A658",
              bgcolor: "transparent",
              color: "white",
              fontSize: "16px",
              px: 2,
              mb: 3,
              "& .MuiChip-label": {
                px: 1,
              },
            }}
          />

          {/* Hero Title */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "32px", md: "44px" },
              lineHeight: { xs: "45px", md: "75px" },
              color: "white",
              mb: 2,
            }}
          >
            Where Tiny Questions
            <br />
            Spark Big Futures
          </Typography>

          {/* Hero Description */}
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "32.5px",
              color: "white",
              mb: 3,
            }}
          >
            Inspire your child&apos;s journey with immersive learning
            environments and joyful moments cultivated by our M.A.R.K values.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 5,
                color: "#1F1B62",
                fontWeight: 700,
                fontSize: "16px",
                px: 3,
                background:
                  "linear-gradient(172.569deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",

                "&:hover": {
                  background:
                    "linear-gradient(172.569deg, rgb(253, 250, 148) 0%, rgb(246, 234, 128) 20%, rgb(239, 218, 109) 50%, rgb(188, 162, 76) 70%, rgb(195, 162, 81) 90%)",
                },
              }}
            >
              Schedule a Visit
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "#1F1B62",
                fontWeight: 600,
                fontSize: "16px",
                borderRadius: 5,
                px: 3,
                "&:hover": {
                  bgcolor: "#F5F7F8",
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
