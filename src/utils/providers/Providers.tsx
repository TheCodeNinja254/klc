"use client";

import React from "react";
import { BookingModalProvider } from "@/context/BookingModalContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <BookingModalProvider>{children}</BookingModalProvider>;
};

export default Providers;
