"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import promiseImage from "@/assets/images/about/promise.png";

const OurPromiseSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "36px", md: "48px", lg: "56px" },
                  fontWeight: 800,
                  color: "#1F1B62",
                  mb: 2,
                }}
              >
                Our Promise
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
                Konza Learning Centre promises a learning journey that is
                academically rigorous yet deeply human. Students receive more
                than lessons. They gain confidence, resilience, and the courage
                to think differently.
                <br />
                <br />
                With CBC and Cambridge pathways delivered by expert educators,
                our promise to parents is a secure, transparent, and
                forward-looking school that prepares children for a world where
                empathy and innovation matter equally.
                <br />
                <br />
                And to the future, Konza commits to graduating young people who
                are not only globally competent but grounded, imaginative, and
                ready to lead. Here, education extends beyond textbooks into
                purpose, connection, and lifelong possibility.
              </Typography>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                border: "1.5px solid #FDFA94",
                borderRadius: "50px",
                p: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "280px", md: "320px", lg: "360px" },
                  borderRadius: "34px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={promiseImage}
                  alt="Students engaged in learning activities"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPromiseSection;
