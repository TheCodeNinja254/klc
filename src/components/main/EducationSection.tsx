"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import PaletteIcon from "@mui/icons-material/Palette";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";
import imgAsset85 from "@/assets/images/main/Education1.png";
import imgUni55 from "@/assets/images/main/Education2.png";

const features = [
  {
    icon: <SchoolIcon sx={{ color: "#D7B11F" }} />,
    title: "Academic Excellence",
    description:
      "Strong foundations in literacy, numeracy, and critical thinking",
  },
  {
    icon: <GroupsIcon sx={{ color: "#D7B11F" }} />,
    title: "Leadership",
    description: "Empowering children to lead with confidence and integrity",
  },
  {
    icon: <PaletteIcon sx={{ color: "#D7B11F" }} />,
    title: "Creativity",
    description: "Fostering imagination and innovative thinking",
  },
  {
    icon: <FavoriteIcon sx={{ color: "#D7B11F" }} />,
    title: "Emotional Wellbeing",
    description: "Supporting mental health and emotional resilience",
  },
  {
    icon: <PublicIcon sx={{ color: "#D7B11F" }} />,
    title: "Global Awareness",
    description: "Preparing learners for an interconnected world",
  },
];

const EducationSection = () => {
  return (
    <Container>
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 6, md: 6 },
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "565px" } }}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "36px", md: "40px" },
                    lineHeight: { xs: "44px", md: "40px" },
                    color: "#1F1B62",
                    mb: 2,
                  }}
                >
                  Education Beyond
                  <br />
                  Excellence
                </Typography>
                <Box
                  sx={{
                    width: "218px",
                    height: "11px",
                    bgcolor: "#D7B11F",
                  }}
                />
              </Box>

              {/* Subtitle */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "24px", md: "32px" },
                  lineHeight: "36px",
                  color: "#1F1B62",
                  mb: 4,
                }}
              >
                Our Vibrant Environment Cultivates
              </Typography>

              <List sx={{ p: 0 }}>
                {features.map((feature, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      px: 0,
                      py: 0,
                      alignItems: "flex-start",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 48,
                        mt: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(154.625deg, rgba(253, 250, 148, 0.3) 8.442%, rgba(246, 234, 128, 0.3) 18.399%, rgba(239, 218, 109, 0.3) 39.846%, rgba(188, 162, 76, 0.3) 58.994%, rgba(195, 162, 81, 0.3) 78.909%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "18px",
                            color: "#0F172A",
                            mb: 0.5,
                          }}
                        >
                          {feature.title}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{
                            fontSize: { xs: "12px", md: "14px" },
                            color: "#0F172A",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Right Images */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                gap: 2,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {/* First Image with Background */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "150px", md: "278px" },
                  height: { xs: "300px", md: "642px" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "530px",
                    top: "112px",
                    left: 0,
                    transform: "scaleX(-1)",
                  }}
                >
                  <svg
                    style={{ display: "block", width: "100%", height: "100%" }}
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 341 530"
                  >
                    <path d="M0 0L341 138.634V530H0V0Z" fill="#1F1B62" />
                  </svg>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "87%",
                    height: "100%",
                    left: "12%",
                    top: 0,
                    // transform: "scaleY(1)",
                  }}
                >
                  <Image
                    src={imgAsset85}
                    alt="Student"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              {/* Second Image with Gradient Background */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "150px", md: "341px" },
                  height: { xs: "280px", md: "602px" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "530px",
                    top: "72px",
                    left: 0,
                  }}
                >
                  <svg
                    style={{ display: "block", width: "100%", height: "100%" }}
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 341 530"
                  >
                    <path
                      d="M0 0L341 138.634V530H0V0Z"
                      fill="url(#paint0_linear_edu)"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_edu"
                        x1="84.6747"
                        x2="370.525"
                        y1="3.54384"
                        y2="391.313"
                      >
                        <stop stopColor="#FDFA94" />
                        <stop offset="0.13" stopColor="#F6EA80" />
                        <stop offset="0.41" stopColor="#EFDA6D" />
                        <stop offset="0.66" stopColor="#BCA24C" />
                        <stop offset="0.92" stopColor="#C3A251" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: "2%",
                    top: 0,
                  }}
                >
                  <Image
                    src={imgUni55}
                    alt="Students"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default EducationSection;
