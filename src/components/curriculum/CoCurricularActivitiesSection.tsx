"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import artsImage from "@/assets/images/curriculum/coc1.png";
import sportsImage from "@/assets/images/curriculum/coc2.png";
import musicImage from "@/assets/images/curriculum/coc3.png";

const CoCurricularActivitiesSection = () => {
  const activities = [
    {
      title: "Creative & Expressive Arts",
      description: `Children express ideas and emotions through art, music, drama, and dance.
       
        These activities encourage creativity, imagination, communication skills, and self-confidence while nurturing an appreciation for culture and creative expression.`,
      image: artsImage,
      imageAlt: "Children engaged in creative arts activities",
    },
    {
      title: "Sports & Physical Development",
      description: `Structured play, movement activities, and beginner sports help children develop coordination, strength, balance, and healthy habits.
        
        Learners also build teamwork, discipline, resilience, and confidence through active participation.`,
      image: sportsImage,
      imageAlt: "Children playing sports and physical activities",
    },
    {
      title: "Music & Movement",
      description: `Through singing, rhythm, dance, and movement, children enhance coordination, listening skills, and emotional expression.
        
        Music and movement support cognitive development while making learning joyful and engaging.`,
      image: musicImage,
      imageAlt: "Children participating in music and movement activities",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "white",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "28px", md: "36px", lg: "42px" },
              fontWeight: 800,
              color: "#1F1B62",
              textAlign: "center",
              mb: 2,
            }}
          >
            Co-Curricular Activities
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 500,
              color: "#424242",
              textAlign: "center",
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Learning Beyond the Classroom
          </Typography>
        </Box>

        {/* Intro Text */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 400,
              color: "#424242",
              lineHeight: 1.6,
              maxWidth: "1000px",
              mx: "auto",
            }}
          >
            At Konza Learning Centre, learning extends beyond academic lessons.
            Learners engage in rich co-curricular experiences that support their
            development physically, emotionally, socially, and creatively. These
            activities are not extras—they are essential for a truly holistic
            education. Through art, movement, music, outdoor exploration, and
            play, learners develop confidence, resilience, teamwork, and joy.
          </Typography>
        </Box>

        {/* Activities List */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
          }}
        >
          {activities.map((activity, index) => (
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              alignItems="center"
              key={index}
            >
              {/* Image */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "240px", md: "320px", lg: "360px" },
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={activity.image}
                    alt={activity.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              {/* Content */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "22px", md: "26px", lg: "28px" },
                      fontWeight: 700,
                      color: "#1F1B62",
                      mb: { xs: 2, md: 3 },
                    }}
                  >
                    {activity.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 400,
                      color: "#424242",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {activity.description}
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

export default CoCurricularActivitiesSection;
