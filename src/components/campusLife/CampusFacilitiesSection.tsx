"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Image from "next/image";
import CheckIcon from "./CheckIcon";
import facilityImage from "@/assets/images/campusLife/facilities.png";
import { useBookingModal } from "@/hooks/useBookingModal";

const facilities = [
  "Bright, airy classrooms that promote engagement and focus.",
  "Dynamic outdoor learning spaces for exploration, play, and discovery.",
  "Creative studios for art, music, and drama.",
  "Safe play areas with equipment for both physical and cognitive development.",
];

const CampusFacilitiesSection = () => {
  const { setOpen } = useBookingModal();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10, lg: 12 },
        bgcolor: "white",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              {/* Section Header */}
              <Box sx={{ mb: { xs: 4, md: 5 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "36px", md: "48px", lg: "56px" },
                    fontWeight: 800,
                    color: "#1F1B62",
                    mb: 2,
                  }}
                >
                  Campus Facilities
                </Typography>
                <Box
                  sx={{
                    width: { xs: "150px", md: "218px" },
                    height: { xs: "8px", md: "11px" },
                    bgcolor: "#D7B11F",
                  }}
                />
              </Box>

              {/* Facilities List */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2.5, md: 3 },
                  mb: { xs: 4, md: 5 },
                }}
              >
                {facilities.map((facility, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: { xs: 2, md: 3 },
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckIcon />
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                        fontWeight: 400,
                        color: "#333",
                        letterSpacing: "0.32px",
                        lineHeight: 1.5,
                        flex: 1,
                      }}
                    >
                      {facility}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                  color: "#333",
                  letterSpacing: "0.32px",
                  lineHeight: 1.5,
                  mb: { xs: 4, md: 5 },
                }}
              >
                Every space encourages academic, physical, and social growth,
                making learning hands-on, joyful, and life-shaping.
              </Typography>

              {/* Book Visit Button */}
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                startIcon={<EventAvailableIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background: "#C8A658",
                  color: "white",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                Book Your Visit
              </Button>
            </Box>
          </Grid>

          {/* Right Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "350px", md: "450px", lg: "550px" },
              }}
            >
              {/* Decorative elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-10px", md: "-20px" },
                  left: { xs: "-10px", md: "-20px" },
                  width: { xs: "80px", md: "138px" },
                  height: { xs: "80px", md: "138px" },
                  bgcolor: "#1F1B62",
                  borderRadius: "20px",
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "-10px", md: "-20px" },
                  right: { xs: "-10px", md: "-40px" },
                  width: { xs: "150px", md: "231px" },
                  height: { xs: "150px", md: "231px" },
                  background:
                    "linear-gradient(154.625deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                  borderRadius: "20px",
                  zIndex: 1,
                }}
              />

              {/* Main Image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  zIndex: 2,
                  ml: { xs: 2, md: 3 },
                  mr: { xs: 2, md: 3 },
                  mt: { xs: 3, md: 4 },
                  mb: { xs: 3, md: 4 },
                }}
              >
                <Image
                  src={facilityImage}
                  alt="Campus facilities"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CampusFacilitiesSection;
