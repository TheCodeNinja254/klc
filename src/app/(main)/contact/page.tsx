import React from "react";
import { Box } from "@mui/material";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

const ContactPage = () => {
  return (
    <Box>
      <ContactHero />
      <ContactSection />
    </Box>
  );
};

export default ContactPage;
