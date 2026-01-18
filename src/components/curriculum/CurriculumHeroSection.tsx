"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import hero from "@/assets/images/curriculum/hero.png";

const CurriculumHeroSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: 50, md: 80 },
          right: { xs: -50, md: 100 },
          width: { xs: 100, md: 231 },
          height: { xs: 100, md: 231 },
          borderRadius: "20px",
          background:
            "linear-gradient(154.625deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 60 },
          right: { xs: 50, md: 250 },
          width: { xs: 80, md: 138 },
          height: { xs: 80, md: 138 },
          borderRadius: "20px",
          bgcolor: "#1F1B62",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "36px", md: "48px", lg: "56px" },
                  fontWeight: 800,
                  color: "#1F1B62",
                  mb: 2,
                }}
              >
                Our Curriculum
              </Typography>
              <Box
                sx={{
                  width: { xs: "150px", md: "218px" },
                  height: { xs: "8px", md: "11px" },
                  bgcolor: "#D7B11F",
                  mb: 4,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 500,
                  color: "#424242",
                  lineHeight: 1.6,
                  letterSpacing: "0.2px",
                }}
              >
                Konza Learning Centre offers two curriculum pathways
                Kenya&apos;s Competency-Based Curriculum (CBC) and the
                international Cambridge pathway.
                <br />
                <br />
                Families choose the path that best aligns with their
                child&apos;s learning style and long-term goals.
                <br />
                <br />
                Whichever pathway a family selects, learners benefit from a
                warm, supportive environment, highly trained teachers and a
                holistic education that nurtures curiosity, confidence and
                lifelong learning.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "400px", lg: "471px" },
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image
                src={hero}
                alt="Teachers teaching students in classroom"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CurriculumHeroSection;
