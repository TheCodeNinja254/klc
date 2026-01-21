"use client";
import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import imgImageFx1 from "@/assets/images/main/highlights1.png";
import imgImageFx2 from "@/assets/images/main/highlights2.png";
import imgImageFx3 from "@/assets/images/main/highlights3.png";

const highlights = [
  {
    image: imgImageFx1,
    title: "Academic Excellence",
    description:
      "Strong academic foundations shaped by curiosity, ambition, and purposeful learning.",
  },
  {
    image: imgImageFx2,
    title: "Global Curriculum",
    description:
      "Internationally aligned CBC and Cambridge programs that prepare students for a connected world.",
  },
  {
    image: imgImageFx3,
    title: "Holistic Development",
    description:
      "A nurturing environment where mindfulness, responsibility, and kindness guide every step of the learning journey.",
  },
];

const HighlightsSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: theme.spacing(4), px: 5, zIndex: 4 }}>
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 12 },
          mt: { xs: -8, md: -12 },
        }}
      >
        <Container>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#1F1B62",
              borderRadius: "34px",
              border: "6px solid #C3A251",
              p: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              justifyContent: "center",
              alignItems: "center",
              zIndex: 4,
            }}
          >
            {highlights.map((highlight, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: "326px",
                  borderRight:
                    index < highlights.length - 1
                      ? { xs: "none", md: "1px solid #C3A251" }
                      : "none",
                  pr: index < highlights.length - 1 ? { xs: 0, md: 3 } : 0,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "120px", md: "136px" },
                    height: "126px",
                    position: "relative",
                    overflow: "hidden",
                    mb: 1,
                  }}
                >
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#F5D862",
                    mb: 1,
                  }}
                >
                  {highlight.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: { xs: "12px", md: "14px" },
                    color: "white",
                    lineHeight: "normal",
                  }}
                >
                  {highlight.description}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default HighlightsSection;
