"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import heroImage from "@/assets/images/campusLife/hero.png";

const CampusLifeHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src={heroImage}
        alt="KLC Campus"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.192) 60.577%, rgba(0, 0, 0, 0.32) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.153) 0%, rgba(0, 0, 0, 0.157) 49.519%)",
        }}
      />

      {/* Content Overlay - Top Center */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60px", md: "100px", lg: "70px" },
          left: { xs: "40%", md: "50%" },
          transform: "translateX(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "24px",
          p: { xs: 3, md: 4, lg: 5 },
          backdropFilter: "blur(20px)",
          maxWidth: { xs: "calc(100% - 60px)", md: "650px" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", md: "48px", lg: "56px" },
            fontWeight: 800,
            color: "#1F1B62",
            mb: 2,
          }}
        >
          Campus Life at KLC
        </Typography>
        <Box
          sx={{
            width: { xs: "150px", md: "218px" },
            height: { xs: "8px", md: "11px" },
            background:
              "linear-gradient(178.629deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
            margin: "0 auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default CampusLifeHero;
