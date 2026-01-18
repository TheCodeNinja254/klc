"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const MARKValuesSection = () => {
  const markValues = [
    {
      letter: "M",
      title: "Mindfulness",
      description:
        "Helping children pause, notice, breathe, and choose. It builds emotional intelligence early.",
    },
    {
      letter: "A",
      title: "Ambition",
      description:
        "We teach children to aim higher, try again, and grow their confidence one small win at a time.",
    },
    {
      letter: "R",
      title: "Responsibility",
      description:
        "From tidying up to owning their actions, responsibility becomes a natural part of who they are.",
    },
    {
      letter: "K",
      title: "Kindness",
      description:
        "Kindness is treated as a skill, not a suggestion. We practise it, model it, celebrate it.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10, lg: 12 },
        bgcolor: "white",
      }}
    >
      <Container>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "36px", md: "48px", lg: "56px" },
              fontWeight: 800,
              color: "#1F1B62",
              mb: 2,
            }}
          >
            Our Values
          </Typography>
          <Box
            sx={{
              width: { xs: "150px", md: "218px" },
              height: { xs: "8px", md: "11px" },
              bgcolor: "#D7B11F",
            }}
          />
        </Box>

        <Grid container spacing={{ xs: 3, md: 6, lg: 8 }}>
          {markValues.map((value, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  bgcolor: "#1F1B62",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: "100%",
                  boxShadow:
                    "0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: { xs: "320px", md: "363px" },
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(169.035deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                    height: { xs: "80px", md: "96px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "80px", md: "100px" },
                      fontWeight: 800,
                      color: "#1F1B62",
                      lineHeight: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {value.letter}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    pt: { xs: 3, md: 4 },
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 600,
                      mb: 0.5,
                      background:
                        "linear-gradient(173.983deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 400,
                      color: "white",
                      lineHeight: 1.5,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MARKValuesSection;
