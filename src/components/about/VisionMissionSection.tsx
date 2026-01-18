"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import visionImage from "@/assets/images/about/vision1.png";
import missionImage from "@/assets/images/about/vision2.png";
import philosophyImage from "@/assets/images/about/vision3.png";

const VisionMissionSection = () => {
  const sections = [
    {
      title: "Vision Statement",
      description:
        "To create a learning world where global innovation meets human warmth, shaping young minds who think broadly, feel deeply, and lead wisely.",
      image: visionImage,
      imageAlt: "Children learning together",
      imagePosition: "left",
    },
    {
      title: "Mission Statement",
      description:
        "We empower learners to grow academically, emotionally, socially, and physically, preparing them to thrive confidently in a complex and interconnected world.",
      image: missionImage,
      imageAlt: "Teacher and students engaged in learning",
      imagePosition: "right",
    },
    {
      title: "Our Philosophy",
      description:
        "We believe learning is not a checklist, but a journey of discovery, creativity, and curiosity.",
      image: philosophyImage,
      imageAlt: "Students working on creative projects",
      imagePosition: "left",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#1F1B62",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 6, md: 10 },
          }}
        >
          {sections.map((section, index) => (
            <Grid
              container
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              key={index}
              direction={{
                xs: "column",
                md: section.imagePosition === "right" ? "row-reverse" : "row",
              }}
            >
              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "180px", md: "250px", lg: "280px" },
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              {/* Content */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", md: "22px" },
                      fontWeight: 600,
                      mb: 3,
                      background:
                        "linear-gradient(177.79deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 400,
                      color: "white",
                      lineHeight: 1.8,
                      letterSpacing: "0.16px",
                    }}
                  >
                    {section.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMissionSection;
