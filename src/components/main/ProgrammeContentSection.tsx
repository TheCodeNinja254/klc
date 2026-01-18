"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import imgChild from "@/assets/images/main/student.png";
import CircleIcon from "@mui/icons-material/Circle";

const programmeItems = [
  "Literacy, numeracy & problem-solving",
  "STEAM integration (science kits, robotics, Lego wall, coding tablets)",
  "Art, music, and creative movement",
  "Outdoor learning: gardens, sensory paths, nature exploration",
  "Daily mindfulness & emotional development",
  "Responsibility routines (tidy-up tasks, self-care, teamwork)",
  "Kindness culture embedded across all learning",
];

export default function ProgrammeContentSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Side - Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "26px", md: "32px", lg: "36px" },
                color: "#1F1B62",
                mb: 4,
                lineHeight: 1.3,
              }}
            >
              What Every Programme Includes
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {programmeItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: "#D4AF37",
                      fontSize: "12px",
                      mt: 0.8,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", md: "14px", lg: "15px" },
                      color: "#1F1B62",
                      lineHeight: "24px",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Side - Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Yellow Circle Background */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: "280px", sm: "350px", md: "380px", lg: "420px" },
                  height: {
                    xs: "280px",
                    sm: "350px",
                    md: "380px",
                    lg: "420px",
                  },
                  borderRadius: "50%",
                  bgcolor: "#F5F2D0",
                  top: { xs: "-20px", md: "-30px" },
                  right: { xs: "auto", md: "0" },
                  zIndex: 1,
                }}
              />

              {/* Child Image */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "90%" },
                  maxWidth: "450px",
                  height: "auto",
                  aspectRatio: "1 / 1.2",
                  zIndex: 2,
                }}
              >
                <Image
                  src={imgChild}
                  alt="Student"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
