"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProgrammeCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
}

const ProgrammeCard = ({
  title,
  description,
  image,
  imageAlt,
}: ProgrammeCardProps) => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 3 },
      }}
    >
      <Container sx={{ borderBottom: "1px solid #C3A251", paddingBottom: 2 }}>
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                position: "relative",
                width: { xs: "140px", md: "170px", lg: "120px" },
                height: { xs: "180px", md: "240px", lg: "190px" },
                mx: "auto",
                borderRadius: "35% 35% 35% 35%",
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 700,
                  mb: 3,
                  background:
                    "linear-gradient(90deg, #F6EA80 0%, #DDC669 25%, #C3A251 50%, #DDC669 75%, #F6EA80 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "11px", md: "12px" },
                  fontWeight: 400,
                  color: "white",
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgrammeCard;
