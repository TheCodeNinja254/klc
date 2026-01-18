"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PublicIcon from "@mui/icons-material/Public";
import BrushIcon from "@mui/icons-material/Brush";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CoreValuesSection = () => {
  const coreValues = [
    {
      icon: SchoolIcon,
      title: "Excellence",
      description:
        "We pursue the highest standards in teaching, learning, and student well-being, ensuring every child reaches their full potential.",
    },
    {
      icon: VerifiedIcon,
      title: "Integrity",
      description:
        "We encourage honesty, responsibility, and thoughtful decision-making, helping children build a strong moral foundation rooted in trust and accountability.",
    },
    {
      icon: LightbulbIcon,
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking, preparing learners for a rapidly changing world by encouraging curiosity and problem-solving.",
    },
    {
      icon: PublicIcon,
      title: "Culture",
      description:
        "We celebrate Kenyan heritage while fostering global awareness, helping children feel rooted and connected to the wider world.",
    },
    {
      icon: BrushIcon,
      title: "Creativity",
      description:
        "We believe imagination is essential to learning and growth, giving children the freedom to explore, express, and create.",
    },
    {
      icon: FavoriteIcon,
      title: "Humility",
      description:
        "We encourage openness, respect, and the willingness to learn from others, nurturing compassionate and thoughtful leaders.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#E5E7EB5C",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "42px", lg: "48px" },
              fontWeight: 700,
              color: "#01007B",
              mb: 3,
            }}
          >
            Our Core Values
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px", lg: "20px" },
              fontWeight: 400,
              color: "#4B5563",
              lineHeight: 1.6,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            What Konza Learning Centre stands for and the principles guiding our
            commitment to early years education.
          </Typography>
        </Box>

        {/* Values Grid */}
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    bgcolor: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: { xs: "60px", md: "70px" },
                      height: { xs: "60px", md: "70px" },
                      borderRadius: "50%",
                      bgcolor: "#01007B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: { xs: "30px", md: "36px" },
                        color: "white",
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: 700,
                      color: "#01007B",
                      mb: 2,
                    }}
                  >
                    {value.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 400,
                      color: "#4B5563",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValuesSection;
