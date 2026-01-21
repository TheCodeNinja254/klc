"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import heroBackground from "@/assets/images/heroBackground.png";
import svgPaths from "@/assets/svgIcons/mainSVGIconPaths";
import { useBookingModal } from "@/hooks/useBookingModal";

const MobileHeroSection = () => {
  const { setOpen } = useBookingModal();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "450px", sm: "500px" },
        overflow: "hidden",
        bgcolor: "#FFFFFF",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src={heroBackground}
          alt="KLC Students"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "60%",
          height: { xs: "450px", sm: "500px" },
          left: "-20px",
          top: "30px",
          zIndex: 1,
        }}
      >
        <svg
          style={{ display: "block", width: "110%", height: "100%" }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1018.4 990"
        >
          <g>
            <path d={svgPaths.p3fa07500} fill="#01007B" fillOpacity="0.7" />
            <path d={svgPaths.p34ba2880} fill="url(#paint0_linear_1_426)" />
            <path d={svgPaths.p2c9089f0} fill="#1F1B62" />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_426"
              x1="256.086"
              x2="686.967"
              y1="6.60275"
              y2="917.97"
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
      {/* Text & CTA Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "100px",
          left: "24px",
          zIndex: 3, // ABOVE SVG
          maxWidth: "260px",
          pointerEvents: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 700,
            mt: 12,
          }}
        >
          Where Tiny Questions <br /> Spark Big Futures
        </Typography>
        <Button
          onClick={() => setOpen(true)}
          size="large"
          sx={{
            backgroundColor: "#FFD700",
            color: "#0A1470",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            mt: 3,
            background:
              "linear-gradient(172.569deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",

            "&:hover": {
              background:
                "linear-gradient(172.569deg, rgb(253, 250, 148) 0%, rgb(246, 234, 128) 20%, rgb(239, 218, 109) 50%, rgb(188, 162, 76) 70%, rgb(195, 162, 81) 90%)",
            },
          }}
        >
          Book a Tour
        </Button>
      </Box>
    </Box>
  );
};

export default MobileHeroSection;
