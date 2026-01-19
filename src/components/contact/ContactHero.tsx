"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import heroImage from "@/assets/images/contact/contact.png";

const ContactHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "250px", sm: "300px", md: "350px" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src={heroImage}
        alt="Contact KLC"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.3)",
        }}
      />

      <Container>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "30px", md: "40px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", md: "48px", lg: "56px" },
              fontWeight: 800,
              color: "#F5D862",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              width: { xs: "120px", md: "150px" },
              height: { xs: "8px", md: "11px" },
              background:
                "linear-gradient(178.629deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
              mt: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactHero;
