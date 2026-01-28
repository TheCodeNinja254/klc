"use client";

import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React from "react";
import { useBookingModal } from "@/hooks/useBookingModal";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const Sidebar = ({ open, onClose, navItems }: SidebarProps) => {
  const { setOpen } = useBookingModal();
  const pathname = usePathname();

  const handleBookingClick = () => {
    setOpen(true);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <Box
        sx={{
          width: 369,
          height: "100%",
          background: "linear-gradient(180deg, #0B1C8F 0%, #0A1470 100%)",
          color: "#FFFFFF",
        }}
        role="presentation"
      >
        {/* Close Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              color: "#FFFFFF",
            }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Menu Items */}
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={onClose}
                  sx={{
                    py: 2,
                    px: 4,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          color: "#FFFFFF",
                          fontSize: 16,
                          fontWeight: item.active ? 600 : 500,
                          position: "relative",
                          "&::after":
                            pathname === item.href
                              ? {
                                  content: '""',
                                  position: "absolute",
                                  width: "4px",
                                  height: "100%",
                                  backgroundColor: "#FFD700",
                                  left: -16,
                                  top: 0,
                                }
                              : {},
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Box sx={{ px: 3 }}>
          <Button
            onClick={() => handleBookingClick()}
            size="large"
            sx={{
              backgroundColor: "#FFD700",
              color: "#0A1470",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              mt: 3,
              background:
                "linear-gradient(172.569deg, rgb(253, 250, 148) 8.442%, rgb(246, 234, 128) 18.399%, rgb(239, 218, 109) 39.846%, rgb(188, 162, 76) 58.994%, rgb(195, 162, 81) 78.909%)",

              "&:hover": {
                background:
                  "linear-gradient(172.569deg, rgb(253, 250, 148) 0%, rgb(246, 234, 128) 20%, rgb(239, 218, 109) 50%, rgb(188, 162, 76) 70%, rgb(195, 162, 81) 90%)",
              },
            }}
          >
            Book a Tour
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
