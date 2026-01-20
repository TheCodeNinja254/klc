"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useBookingModal } from "@/hooks/useBookingModal";

const steps = [
  {
    number: 1,
    title: "Schedule a Visit",
    description:
      "Book a personalized tour to experience our campus and meet our educators.",
    side: "left",
    color: "#1F1B62",
  },
  {
    number: 2,
    title: "Submit Application",
    description:
      "Complete our simple online application form with your child's information.",
    side: "right",
    color: "#D7B11F",
  },
  {
    number: 3,
    title: "Assessment & Interview",
    description:
      "Meet with our team for a friendly assessment and parent consultation.",
    side: "left",
    color: "#7BA5D6",
  },
  {
    number: 4,
    title: "Welcome to Konza!",
    description:
      "Receive your acceptance and begin the exciting journey with us.",
    side: "right",
    color: "#1F1B62",
  },
];

const JourneySection = () => {
  const { setOpen } = useBookingModal();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 3 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "36px", md: "40px" },
              color: "#1F1B62",
              mb: 2,
            }}
          >
            Start Your Child&#39;s Journey
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#4B5563",
            }}
          >
            A simple, supportive admissions process designed with parents in
            mind
          </Typography>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "700px",
            mx: "auto",
            mb: 8,
          }}
        >
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "30px",
              bottom: "30px",
              width: "4px",
              bgcolor: "#3B82F6",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "block" },
            }}
          />

          {/* Mobile Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: "30px",
              top: "30px",
              bottom: "30px",
              width: "4px",
              bgcolor: "#3B82F6",
              display: { xs: "block", md: "none" },
            }}
          />

          {/* Steps */}
          <Box sx={{ position: "relative" }}>
            {steps.map((step, index) => (
              <Box
                key={step.number}
                sx={{
                  position: "relative",
                  mb: index < steps.length - 1 ? 8 : 0,
                }}
              >
                {/* Desktop Layout */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.side === "left" ? (
                    <>
                      {/* Left Content */}
                      <Box
                        sx={{
                          flex: 1,
                          pr: 4,
                          textAlign: "right",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "18px",
                            color: "#1F1B62",
                            mb: 1,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#4B5563",
                            lineHeight: "20px",
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>

                      {/* Circle */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: step.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 2,
                          marginRight: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "24px",
                            color: "white",
                          }}
                        >
                          {step.number}
                        </Typography>
                      </Box>

                      {/* Empty Right Side */}
                      <Box sx={{ flex: 1 }} />
                    </>
                  ) : (
                    <>
                      {/* Empty Left Side */}
                      <Box sx={{ flex: 1 }} />

                      {/* Circle */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: step.color,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 2,
                          marginRight: -3,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "24px",
                            color: "white",
                          }}
                        >
                          {step.number}
                        </Typography>
                      </Box>

                      {/* Right Content */}
                      <Box
                        sx={{
                          flex: 1,
                          pl: 4,
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "18px",
                            color: "#1F1B62",
                            mb: 1,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#4B5563",
                            lineHeight: "20px",
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>

                {/* Mobile Layout */}
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  {/* Circle */}
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      minWidth: 60,
                      borderRadius: "50%",
                      bgcolor: step.color,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "24px",
                        color: "white",
                      }}
                    >
                      {step.number}
                    </Typography>
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1, pt: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#1F1B62",
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#4B5563",
                        lineHeight: "20px",
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            disableElevation
            variant="contained"
            onClick={() => setOpen(true)}
            size="large"
            sx={{
              borderRadius: 8,
              bgcolor: "#1F1B62",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                bgcolor: "#0D0A3D",
              },
            }}
          >
            Book a Parent Tour
          </Button>

          <Button
            disableElevation
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#1F1B62",
              borderRadius: 8,
              color: "#1F1B62",
              fontWeight: 600,
              fontSize: "16px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                borderColor: "#0D0A3D",
                bgcolor: "rgba(31, 27, 98, 0.04)",
              },
            }}
          >
            Learn About Requirements
          </Button>

          <Button
            disableElevation
            variant="contained"
            size="large"
            sx={{
              background:
                "linear-gradient(172.569deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
              color: "#1F1B62",
              fontWeight: 700,
              fontSize: "16px",
              px: 4,
              py: 1.5,
              borderRadius: 8,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                background:
                  "linear-gradient(172.569deg, rgb(253, 250, 148) 0%, rgb(246, 234, 128) 20%, rgb(239, 218, 109) 50%, rgb(188, 162, 76) 70%, rgb(195, 162, 81) 90%)",
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default JourneySection;
