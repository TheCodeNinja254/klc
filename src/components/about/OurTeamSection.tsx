"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import team1Image from "@/assets/images/about/team1.png";
import team2Image from "@/assets/images/about/team2.png";
import team3Image from "@/assets/images/about/team3.png";
import team4Image from "@/assets/images/about/team4.png";

const OurTeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Head of School",
      description:
        "With over 15 years of experience in early childhood education, Sarah leads our team with a vision of nurturing curious, confident learners ready for the future.",
      image: team1Image,
    },
    {
      name: "Michael Chen",
      role: "Academic Director",
      description:
        "Michael brings expertise in curriculum development and educational innovation, ensuring our programs meet the highest international standards.",
      image: team2Image,
    },
    {
      name: "Amina Osman",
      role: "Lead Teacher - Early Years",
      description:
        "Amina is passionate about play-based learning and creating warm, engaging environments where young children thrive.",
      image: team3Image,
    },
    {
      name: "David Kimani",
      role: "Student Welfare Coordinator",
      description:
        "David ensures every child feels safe, supported, and valued, fostering a culture of kindness and emotional well-being.",
      image: team4Image,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "42px", lg: "48px" },
              fontWeight: 800,
              color: "#1F1B62",
              mb: 3,
            }}
          >
            Our Team
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px", lg: "20px" },
              fontWeight: 400,
              color: "#4B5563",
              lineHeight: 1.6,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Meet the dedicated educators and leaders committed to nurturing the
            next generation of learners.
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "250px", md: "280px" },
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: 700,
                      color: "#1F1B62",
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: 600,
                      color: "#D7B11F",
                      mb: 2,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: 400,
                      color: "#4B5563",
                      lineHeight: 1.6,
                    }}
                  >
                    {member.description}
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

export default OurTeamSection;
