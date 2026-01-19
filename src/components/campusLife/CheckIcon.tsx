"use client";

import React from "react";
import { Box } from "@mui/material";
import svgPaths from "@/assets/svgIcons/mainSVGIconPaths";

const CheckIcon = () => {
  return (
    <Box
      sx={{
        width: { xs: "26px", md: "32.214px" },
        height: { xs: "26px", md: "32.214px" },
        flexShrink: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 42.2143 42.2143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="filter0_ii_32_959"
            x="-11.52"
            y="-11.52"
            width="65.2543"
            height="65.2543"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-3.2" dy="3.2" />
            <feGaussianBlur stdDeviation="1.6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.099 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_32_959"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="3.2" dy="-3.2" />
            <feGaussianBlur stdDeviation="1.6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.94902 0 0 0 0 0.6 0 0 0 0 0.290196 0 0 0 0.099 0"
            />
            <feBlend
              in2="effect1_innerShadow_32_959"
              mode="normal"
              result="effect2_innerShadow_32_959"
            />
          </filter>
          <linearGradient
            id="paint0_linear_32_959"
            x1="10.4823"
            y1="0.282266"
            x2="28.9395"
            y2="39.1976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFA94" />
            <stop offset="0.13" stopColor="#F6EA80" />
            <stop offset="0.41" stopColor="#EFDA6D" />
            <stop offset="0.66" stopColor="#BCA24C" />
            <stop offset="0.92" stopColor="#C3A251" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_32_959"
            x1="7.20662"
            y1="0.194058"
            x2="19.8959"
            y2="26.9483"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFA94" />
            <stop offset="0.13" stopColor="#F6EA80" />
            <stop offset="0.41" stopColor="#EFDA6D" />
            <stop offset="0.66" stopColor="#BCA24C" />
            <stop offset="0.92" stopColor="#C3A251" />
          </linearGradient>
        </defs>
        <g id="Centang">
          <g id="Ellipse 6" filter="url(#filter0_ii_32_959)">
            <circle
              cx="21.1071"
              cy="21.1071"
              r="21.1071"
              fill="url(#paint0_linear_32_959)"
            />
          </g>
          <g id="basic / check">
            <rect
              width="29.0223"
              height="29.0223"
              transform="translate(6.15625 6.15625)"
              fill="url(#paint1_linear_32_959)"
            />
            <path d={svgPaths.p21a78800} fill="#1F1B62" id="coolicon" />
          </g>
        </g>
      </svg>
    </Box>
  );
};

export default CheckIcon;
