"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import svgPaths from "@/assets/svgIcons/mainSVGIconPaths";

const Icon = () => {
  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "24px",
        height: "24px",
      }}
    >
      <svg
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p166a701}
            id="Vector"
            stroke="#01007B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M5 21H19"
            id="Vector_2"
            stroke="#01007B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </Box>
  );
};

const MobileValueCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "146px",
        display: { xs: "block", md: "none" },
      }}
    >
      {/* Bottom Blue Card */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "45px",
          width: "100%",
          height: "105px",
          background:
            "linear-gradient(179.504deg, rgb(31, 27, 98) 2.0139%, rgb(63, 55, 200) 98.691%)",
          borderBottomLeftRadius: "18px",
          borderBottomRightRadius: "18px",
        }}
      />

      {/* Top Gold Card */}
      <Box
        sx={{
          position: "absolute",
          left: "6%",
          top: -30,
          zIndex: 1,
          width: "87%",
          height: "180px",
          background:
            "linear-gradient(168.008deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(195, 162, 81) 78.909%)",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",
        }}
      >
        {/* Content Container */}
        <Box
          sx={{
            position: "absolute",
            top: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
          }}
        >
          {/* Badge Container */}
          <Box
            sx={{
              position: "relative",
              width: "80%",
              height: "32px",
              borderRadius: "9999px",
              border: "0.7px solid #01007B",
              boxShadow:
                "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              mt: 2,
              justifyContent: "center",
            }}
          >
            <Icon />
            <Typography
              sx={{
                color: "#1F1B62",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.0875px",
                lineHeight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              Excellence in Early Education
            </Typography>
          </Box>

          {/* Description Text */}
          <Box sx={{ px: 3 }}>
            <Typography
              sx={{
                width: "100%",
                color: "#1F1B62",
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 500,
                letterSpacing: "-0.4492px",
                textAlign: "center",
                mt: 2,
              }}
            >
              Inspire your child&apos;s journey with immersive learning
              environments and joyful moments cultivated by our M.A.R.K values.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileValueCard;
