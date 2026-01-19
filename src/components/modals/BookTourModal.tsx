"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface BookTourModalProps {
  open: boolean;
  onClose: () => void;
}

const BookTourModal = ({ open, onClose }: BookTourModalProps) => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    mobileNumber: "",
    email: "",
    dateOfBirth: "",
    academicYear: "",
    entryTerm: "",
    yearGroup: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Book Tour Form submitted:", formData);
    // Handle form submission
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#01007B",
          px: 4,
          py: 3,
          position: "relative",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "white",
          }}
        >
          <CloseIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "white",
            mb: 1,
          }}
        >
          Schedule Your Visit
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: 1.5,
          }}
        >
          Join us for a personalized tour and discover what makes KLC special!
        </Typography>
      </Box>

      {/* Form Content */}
      <DialogContent
        sx={{
          px: 4,
          py: 4,
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2.5}>
            {/* Parent Name & Child Name */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Parent Name <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                name="parentName"
                placeholder="Enter parent's full name"
                value={formData.parentName}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
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
                    "&::placeholder": {
                      color: "#9CA3AF",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Child&#39;s Name <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                name="childName"
                placeholder="Enter child's full name"
                value={formData.childName}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
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
                    "&::placeholder": {
                      color: "#9CA3AF",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Grid>

            {/* Mobile Number & Email */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Mobile Number <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                type="tel"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
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
                    "&::placeholder": {
                      color: "#9CA3AF",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Email <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
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
                    "&::placeholder": {
                      color: "#9CA3AF",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Grid>

            {/* Child's Date of Birth */}
            <Grid size={{ xs: 12 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Child&#39;s Date of Birth{" "}
                <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                InputProps={{
                  endAdornment: (
                    <CalendarMonthIcon
                      sx={{ fontSize: 20, color: "#9CA3AF" }}
                    />
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
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
                    color: formData.dateOfBirth ? "#000" : "#9CA3AF",
                  },
                }}
              />
            </Grid>

            {/* Academic Year, Entry Term, Year Group Entry */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Academic Year <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <FormControl fullWidth required>
                <Select
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D7B11F",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D7B11F",
                    },
                    "& .MuiSelect-select": {
                      fontSize: "14px",
                      color: formData.academicYear ? "#000" : "#9CA3AF",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  <MenuItem value="2024-2025">2024-2025</MenuItem>
                  <MenuItem value="2025-2026">2025-2026</MenuItem>
                  <MenuItem value="2026-2027">2026-2027</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Entry Term <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <FormControl fullWidth required>
                <Select
                  name="entryTerm"
                  value={formData.entryTerm}
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D7B11F",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D7B11F",
                    },
                    "& .MuiSelect-select": {
                      fontSize: "14px",
                      color: formData.entryTerm ? "#000" : "#9CA3AF",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Term
                  </MenuItem>
                  <MenuItem value="Term 1">Term 1</MenuItem>
                  <MenuItem value="Term 2">Term 2</MenuItem>
                  <MenuItem value="Term 3">Term 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#01007B",
                  mb: 0.5,
                }}
              >
                Year Group Entry <span style={{ color: "#01007B" }}>*</span>
              </Typography>
              <FormControl fullWidth required>
                <Select
                  name="yearGroup"
                  value={formData.yearGroup}
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                    borderRadius: "8px",
                    bgcolor: "#F9FAFB",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D7B11F",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D7B11F",
                    },
                    "& .MuiSelect-select": {
                      fontSize: "14px",
                      color: formData.yearGroup ? "#000" : "#9CA3AF",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Year Group
                  </MenuItem>
                  <MenuItem value="Pre-K">Pre-K</MenuItem>
                  <MenuItem value="Kindergarten">Kindergarten</MenuItem>
                  <MenuItem value="Year 1">Year 1</MenuItem>
                  <MenuItem value="Year 2">Year 2</MenuItem>
                  <MenuItem value="Year 3">Year 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Important Reminder */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  p: 2,
                  borderLeft: "4px solid #D7B11F",
                  bgcolor: "#FEF9E7",
                  borderRadius: "4px",
                }}
              >
                <InfoIcon
                  sx={{
                    flexShrink: 0,
                    marginTop: 2,
                    fontSize: 20,
                    color: "#D7B11F",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#01007B",
                      mb: 0.5,
                    }}
                  >
                    Important Reminder
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#666",
                      lineHeight: 1.5,
                    }}
                  >
                    Please bring your ID/Passport during the visit to school
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Submit Button */}
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<CalendarMonthIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background:
                    "linear-gradient(172.569deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                  color: "#1F1B62",
                  py: 1.5,
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: "8px",
                  boxShadow: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(172.569deg, rgb(246, 234, 128) 8.442%, rgb(239, 218, 109) 18.399%, rgb(188, 162, 76) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",
                    boxShadow: "0px 4px 12px rgba(215, 177, 31, 0.3)",
                  },
                }}
              >
                Book Your Visit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BookTourModal;
