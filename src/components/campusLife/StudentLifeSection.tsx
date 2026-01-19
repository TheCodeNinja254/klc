"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import studentImage from "@/assets/images/campusLife/studentLife.png";

const StudentLifeSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#01007B",
        overflow: "hidden",
      }}
    >
      {/* Top Navy Bar */}
      <Box
        sx={{
          bgcolor: "#1F1B62",
          height: { xs: "40px", md: "67px" },
          width: "100%",
        }}
      />

      {/* Main Content Area */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "700px" },
        }}
      >
        {/* Background Image - Full Width */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: 0,
            left: 0,
            width: { xs: "100%", md: "80%" },
            height: { xs: "400px", md: "100%" },
            zIndex: 1,
          }}
        >
          <Image
            src={studentImage}
            alt="Students at KLC"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>

        {/* Content Card - Overlays on Right */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: { xs: "auto", md: "40px", lg: "80px" },
            top: { xs: "auto", md: "50%" },
            transform: { xs: "none", md: "translateY(-50%)" },
            bgcolor: "white",
            borderRadius: "8px",
            p: { xs: 3, md: 4 },
            mx: { xs: 2, md: 0 },
            my: { xs: -4, md: 0 },
            borderLeft: "3px solid #D7B11F",
            maxWidth: { xs: "100%", md: "565px" },
            width: { xs: "calc(100% - 32px)", md: "565px" },
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        >
          {/* Student Life Section */}
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Box sx={{ mb: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "26px", md: "30px", lg: "36px" },
                  fontWeight: 800,
                  color: "#1F1B62",
                  mb: 2,
                }}
              >
                Student Life
              </Typography>
              <Box
                sx={{
                  width: { xs: "150px", md: "218px" },
                  height: { xs: "7px", md: "8px" },
                  bgcolor: "#D7B11F",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 400,
                color: "#333",
                letterSpacing: "0.32px",
                lineHeight: 1.6,
              }}
            >
              Life at Konza is vibrant, purposeful, and joyful. Children learn
              to collaborate, lead, and innovate while building friendships and
              confidence.
              <br />
              <br />
              Project-based learning, community engagement, and reflective
              practices ensure students grow academically and as compassionate,
              thoughtful citizens ready to engage with the world.
            </Typography>
          </Box>

          {/* Safety Wellbeing Section */}
          <Box>
            <Box sx={{ mb: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "26px", md: "30px", lg: "36px" },
                  fontWeight: 800,
                  color: "#1F1B62",
                  mb: 2,
                }}
              >
                Safety Wellbeing
              </Typography>
              <Box
                sx={{
                  width: { xs: "150px", md: "218px" },
                  height: { xs: "7px", md: "8px" },
                  bgcolor: "#D7B11F",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 400,
                color: "#333",
                letterSpacing: "0.32px",
                lineHeight: 1.6,
              }}
            >
              Every aspect of our campus is designed to keep children secure,
              supported, and cared for.
              <br />
              <br />
              Our facilities follow strict safety standards, and our staff are
              trained to attend to both emotional and physical wellbeing.
              Parents can trust that children are learning and growing in a
              safe, nurturing, and joyful environment.
            </Typography>
          </Box>
        </Box>

        {/* Spacer for mobile to prevent content overlap */}
        <Box sx={{ display: { xs: "block", md: "none" }, height: "40px" }} />
      </Box>
    </Box>
  );
};

export default StudentLifeSection;
