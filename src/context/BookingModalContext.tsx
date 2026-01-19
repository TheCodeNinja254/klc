"use client";

import React, { createContext, useState, ReactNode } from "react";

type BookingModalContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BookingModalContext = createContext<
  BookingModalContextType | undefined
>(undefined);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <BookingModalContext.Provider value={{ open, setOpen }}>
      {children}
    </BookingModalContext.Provider>
  );
};
