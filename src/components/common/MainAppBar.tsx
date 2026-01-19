"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svgIcons/Logo.svg";
import { useBookingModal } from "@/hooks/useBookingModal";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Campus life", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
];

const MainAppBar = () => {
  const { setOpen } = useBookingModal();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(180deg, #0B1C8F 0%, #0A1470 100%)",
        boxShadow: "0px 18px 25px rgba(11, 28, 143, 0.35)",
      }}
    >
      <Toolbar sx={{ minHeight: 80, px: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            src={Logo}
            alt="Konza Learning Centre"
            width={80}
            height={80}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} />
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mx: "auto",
          }}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: 500,
                  position: "relative",
                  cursor: "pointer",
                  "&::after": item.active
                    ? {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#FFD700",
                        bottom: -6,
                        left: 0,
                      }
                    : {},
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>
        <Button
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#FFD700",
            color: "#0A1470",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 999,
            px: 3,
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
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
