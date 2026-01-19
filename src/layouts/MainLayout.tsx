"use client";

import React from "react";
import { Box } from "@mui/material";
import { Footer, MainAppBar } from "@/components/common";
import BookTourModal from "@/components/modals/BookTourModal";
import { useBookingModal } from "@/hooks/useBookingModal";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useBookingModal();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <MainAppBar />
      {children}
      <Footer />
      <BookTourModal open={open} onClose={onClose} />
    </Box>
  );
};

export default MainLayout;
