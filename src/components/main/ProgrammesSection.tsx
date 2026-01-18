"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import imgEnvato3 from "@/assets/svgIcons/programmes/prog1.svg";
import imgGemini from "@/assets/svgIcons/programmes/prog2.svg";
import imgEnvato4 from "@/assets/svgIcons/programmes/prog3.svg";
import imgAsset25 from "@/assets/svgIcons/programmes/prog4.svg";
import programs from "@/assets/images/main/programs.png";

const programmes = [
  {
    image: imgEnvato3,
    title: "Playgroup (Ages 1–3",
    description:
      "A gentle introduction to school through sensory discovery, music, movement, imaginative play, and early social skills. Children explore puzzle zones, sensory bins, soft reading corners, and outdoor water/mud play — all supporting early brain development.",
  },
  {
    image: imgGemini,
    title: "PP1 (Ages 3–4)",
    description:
      "Play-based learning with introduced structure. Children begin early literacy and numeracy through hands-on activities, creative storytelling, art, and daily mindfulness routines. Classrooms feature block centers, craft tables, themed wall murals, and large motor-skill activities.",
  },
  {
    image: imgEnvato4,
    title: "PP2 (Ages 4–5)",
    description:
      "Creative, structured learning that prepares children for the academic journey ahead. Students practice phonics, numbers, problem-solving, simple goal-setting (Ambition), and taking care of their learning spaces (Responsibility).",
  },
  {
    image: imgAsset25,
    title: "Grade 1 (Ages 6–7)",
    description:
      "A blend of foundational academics, inquiry-based learning, creativity, STEAM activities, and character development. Students work with interactive whiteboards, coding tablets, science kits, reading centers, and hands-on materials — all supported by continuous assessment.",
  },
];

const ProgrammesSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: theme.spacing(4),
        py: { xs: 8, md: 7 },
        bgcolor: "#F9FAFB",
      }}
    >
      {/* Our Programmes Header Section */}
      <Box
        sx={{
          bgcolor: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 6, md: 8 } }}>
            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "42px", lg: "48px" },
                fontWeight: 800,
                color: "#1F1B62",
                mb: 2,
              }}
            >
              Our Programmes
            </Typography>
            <Box
              sx={{
                width: { xs: "120px", md: "150px" },
                height: { xs: "8px", md: "10px" },
                bgcolor: "#D7B11F",
                mb: 4,
              }}
            />

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px", lg: "22px" },
                fontWeight: 700,
                color: "#1F1B62",
                mb: 3,
              }}
            >
              Where Learning Sparks Curiosity, Confidence, and Character
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "16px" },
                fontWeight: 400,
                color: "#000",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Konza Learning Centre offers a warm, play-centered, future-focused
              early years program designed to nurture the whole child. Our CBC
              and Cambridge-aligned pathways ensure strong academic foundations
              while integrating the M.A.R.K ethos — Mindfulness, Ambition,
              Responsibility, and Kindness — in every aspect of school life.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 400,
                color: "#000",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Our programs intentionally blend literacy, numeracy, creativity,
              emotional intelligence, and exploration, helping children grow
              into confident, joyful, lifelong learners.
            </Typography>
          </Box>
        </Container>

        {/* Hero Image with Gold Background */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "100px", md: "200px", lg: "200px" },
            background:
              "linear-gradient(154.625deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "right",
            // overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              height: "150%",
            }}
          >
            <Image
              src={programs}
              alt="Happy students in KLC uniforms"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
              }}
              priority
            />
          </Box>
        </Box>
      </Box>

      <Container>
        {/* Programme Cards */}
        <Grid container spacing={4}>
          {programmes.map((programme, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  mt: 10,
                  "&:hover": {
                    transform: "translateY(-12px)",
                  },
                }}
              >
                {/* Icon Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -48,
                    width: 96,
                    height: 96,
                    borderRadius: "50%",
                    backgroundColor: "#1F1B62",
                    border: "6px solid #F3E27C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    style={{
                      width: "50%",
                      height: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Card */}
                <Paper
                  elevation={0}
                  sx={{
                    width: 360,
                    borderRadius: "28px",
                    pt: 7,
                    pb: 4,
                    px: 4,
                    textAlign: "center",
                    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#1F1B62",
                      mb: 2,
                    }}
                  >
                    {programme.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#333",
                    }}
                  >
                    {programme.description}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default ProgrammesSection;
