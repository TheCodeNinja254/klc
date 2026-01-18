"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import heroImage from "@/assets/images/about/aboutHero.png";

const AboutHeroSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 4 },
        bgcolor: "white",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "350px", md: "500px", lg: "600px" },
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={heroImage}
                alt="Happy KLC students in uniform"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>

          {/* Right Content with Border */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                border: "2px solid",
                borderImage:
                  "linear-gradient(154.625deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%) 1",
                borderRadius: 10,
                p: { xs: 4, md: 5, lg: 6 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px",
                  bottom: "-2px",
                  background:
                    "linear-gradient(154.625deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                  borderRadius: 10,
                  zIndex: -1,
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "36px", md: "48px", lg: "56px" },
                  fontWeight: 800,
                  color: "#1F1B62",
                  mb: 1,
                }}
              >
                About Us
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
                  fontSize: { xs: "16px", md: "20px", lg: "25px" },
                  fontWeight: 500,
                  color: "#1F1B62",
                  mb: 3,
                }}
              >
                Why Konza Learning Centre Exists
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 500,
                  color: "#0F172A",
                  lineHeight: 1.6,
                  letterSpacing: "0.2px",
                  mb: 4,
                }}
              >
                Konza Learning Centre was created for this new generation.
                Rooted in Kenya and inspired by the country&apos;s growing
                innovation landscape, the school brings together local warmth
                and international ambition.
                <br />
                <br />
                It is a place where children can begin their learning journey in
                an environment that feels safe, inspiring, and intellectually
                alive.
                <br />
                <br />
                We believe early learning is the blueprint of a child&apos;s
                future. That is why we offer a foundation built on curiosity,
                emotional well-being, and strong academic beginnings, nurturing
                young learners who are ready to succeed and positively shape the
                world ahead.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(170.668deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                  color: "#1F1B62",
                  px: 3,
                  py: 1.5,
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: "12px",
                  "&:hover": {
                    background:
                      "linear-gradient(170.668deg, rgb(246, 234, 128) 8.442%, rgb(239, 218, 109) 18.399%, rgb(188, 162, 76) 39.846%, rgb(195, 162, 81) 58.994%, rgb(253, 250, 148) 78.909%)",
                  },
                }}
              >
                Book Your Visit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;
