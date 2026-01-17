"use client";

import React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const features = [
  {
    icon: <GroupsIcon sx={{ fontSize: 30 }} />,
    title: "Small Class Sizes",
    description:
      "Individual attention with optimal teacher-to-student ratios for personalized learning.",
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 30 }} />,
    title: "Balanced Development",
    description:
      "Academic excellence combined with co-curricular activities and character building.",
  },
  {
    icon: <ShieldOutlinedIcon sx={{ fontSize: 30 }} />,
    title: "Safe Community",
    description:
      "Supportive, inclusive environment where every student feels valued and secure.",
  },
  {
    icon: <BusinessOutlinedIcon sx={{ fontSize: 30 }} />,
    title: "Modern Facilities",
    description:
      "State-of-the-art resources and facilities designed for 21st-century learning.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 30 }} />,
    title: "Foundation for Success",
    description:
      "Preparing students for both immediate achievement and lifelong learning.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 30 }} />,
    title: "Nurturing Environment",
    description:
      "Every child is known, valued, and supported throughout their educational journey.",
  },
];

const GlanceSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: theme.spacing(6),
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "36px", md: "40px" },
              color: "#01007B",
              mb: 2,
            }}
          >
            KLC at a Glance
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              color: "#4B5563",
            }}
          >
            Excellence in every aspect of education
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center" direction="row">
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 6, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#1F1B62",
                  borderRadius: "24px",
                  p: 4,
                  height: "268px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    "-20px -20px 60px 0px white, 20px 20px 60px 0px #bebebe",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "16px",
                    background:
                      "linear-gradient(154.625deg, rgba(253, 250, 148, 0.3) 8.442%, rgba(246, 234, 128, 0.3) 18.399%, rgba(239, 218, 109, 0.3) 39.846%, rgba(188, 162, 76, 0.3) 58.994%, rgba(195, 162, 81, 0.3) 78.909%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    color: "#C8A658",
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "white",
                    mb: 2,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    lineHeight: "24px",
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GlanceSection;
