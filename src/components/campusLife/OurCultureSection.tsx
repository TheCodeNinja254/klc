"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import cultureImage from "@/assets/images/campusLife/culture.png";

const OurCultureSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#1F1B62",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: "100px", md: "145px" },
          background:
            "linear-gradient(177.352deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { xs: "10px", md: "11px" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "200px", md: "254px" },
          height: { xs: "200px", md: "250px" },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={cultureImage}
            alt="Student activities"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

      <Container>
        <Box
          sx={{
            pt: { xs: "220px", md: "280px" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 3 },
          }}
        >
          {/* Section Header */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "36px", md: "48px", lg: "56px" },
                fontWeight: 800,
                color: "white",
                mb: 2,
              }}
            >
              Our Culture
            </Typography>
            <Box
              sx={{
                width: { xs: "150px", md: "218px" },
                height: { xs: "8px", md: "11px" },
                bgcolor: "#D7B11F",
              }}
            />
          </Box>

          {/* Content */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 400,
                color: "white",
                letterSpacing: "0.32px",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              The culture at Konza is the heartbeat of our school. Every child
              is valued, supported, and encouraged to explore boldly. Our
              community blends curiosity with compassion, courage with kindness,
              and high aspirations with heartfelt guidance.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 400,
                color: "white",
                letterSpacing: "0.32px",
                lineHeight: 1.6,
              }}
            >
              Collaboration, empathy, and respect are woven into daily life,
              ensuring learners grow academically, emotionally, socially, and
              physically in an environment that celebrates individuality and
              connection.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurCultureSection;
