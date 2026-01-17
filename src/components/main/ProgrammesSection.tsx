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
import imgGemini from "@/assets/svgIcons/programmes/prog1.svg";
import imgEnvato4 from "@/assets/svgIcons/programmes/prog1.svg";
import imgAsset25 from "@/assets/svgIcons/programmes/prog1.svg";

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
      <Container>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "36px", md: "40px" },
              color: "#1F1B62",
              mb: 2,
            }}
          >
            Our Programmes
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#4B5563",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Tailored learning pathways designed to nurture every child&#39;s
            unique potential from early years through primary education.
          </Typography>
        </Box>

        {/* Programme Cards */}
        <Grid container spacing={4}>
          {programmes.map((programme, index) => (
            <Grid size={{ xs: 23, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  mt: 10,
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
                      fontSize: "11px",
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
