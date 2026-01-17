"use client";
import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoImage from "@/assets/svgIcons/Logo.svg";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1F1B62",
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo and Tagline */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src={logoImage}
                alt="KLC International Kindergarten"
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "280px",
              }}
            >
              Nurturing tomorrow&#39;s leaders through holistic education and
              character development.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Contact Info
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <PhoneIcon sx={{ fontSize: "18px", color: "#D4AF37" }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <EmailIcon sx={{ fontSize: "18px", color: "#D4AF37" }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  info@klc.edu
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: "18px",
                    color: "#D4AF37",
                    mt: 0.2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  123 Education Street
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Follow Us */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      bgcolor: "#D4AF37",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            © {new Date().getFullYear()} KLC International Kindergarten. All
            rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
