"use client";

import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8, lg: 10 },
        bgcolor: "#F9FAFB",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
          {/* Left Column - Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "28px", md: "32px", lg: "36px" },
                  fontWeight: 700,
                  color: "#1F1B62",
                  mb: 3,
                }}
              >
                Let&#39;s talk with us
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "15px" },
                  color: "#666",
                  lineHeight: 1.6,
                  mb: { xs: 4, md: 5 },
                }}
              >
                Questions, comments, or suggestions? Simply fill in the form and
                we&#39;ll be in touch shortly.
              </Typography>

              {/* Contact Details */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {/* Phone */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneIcon sx={{ color: "#1F1B62", fontSize: 20 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "15px" },
                      color: "#333",
                    }}
                  >
                    +1012 3456 789
                  </Typography>
                </Box>

                {/* Email */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmailIcon sx={{ color: "#1F1B62", fontSize: 20 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "15px" },
                      color: "#333",
                    }}
                  >
                    info@klc.edu
                  </Typography>
                </Box>

                {/* Address */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ color: "#1F1B62", fontSize: 20 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "15px" },
                      color: "#333",
                    }}
                  >
                    123 Education Street
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: "white",
                p: { xs: 3, md: 4 },
                borderRadius: "12px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#D7B11F",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D7B11F",
                        },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Grid>

                {/* Last Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#D7B11F",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D7B11F",
                        },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#D7B11F",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D7B11F",
                        },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#D7B11F",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D7B11F",
                        },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Grid>

                {/* Message */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#3B82F6",
                        },
                        "&:hover fieldset": {
                          borderColor: "#2563EB",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#2563EB",
                        },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#1F1B62",
                      color: "white",
                      py: 1.5,
                      fontSize: "15px",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "8px",
                      "&:hover": {
                        bgcolor: "#01007B",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
