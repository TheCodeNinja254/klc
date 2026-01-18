"use client";

import React from "react";
import { Box } from "@mui/material";
import ProgrammeCard from "./ProgrammeCard";
import playgroupImage from "@/assets/images/curriculum/prog1.png";
import pp1Image from "@/assets/images/curriculum/prog2.png";
import pp2Image from "@/assets/images/curriculum/prog3.png";
import grade1Image from "@/assets/images/curriculum/prog4.png";

const ProgrammesSection = () => {
  const programmes = [
    {
      title: "Playgroup (Ages 1–3)",
      description: `Our Playgroup program offers a loving and gentle introduction to school, where children feel safe, nurtured, and free to explore the world around them. At this stage, learning happens through the senses, movement, and joyful interaction, laying the foundation for lifelong curiosity and confidence.

Children engage in sensory-rich experiences such as music and movement, imaginative play, and early social interaction. Through hands-on exploration in puzzle zones, sensory bins, soft reading corners, and outdoor water and mud play, young learners strengthen early brain development, coordination, communication, and emotional awareness.`,
      image: playgroupImage,
      imageAlt: "Young children engaged in playgroup activities",
    },
    {
      title: "PP1 (Ages 3–4)",
      description: `Our PP1 program builds on early confidence and curiosity, guiding children as they begin to understand the world through purposeful play and exploration. Learning remains joyful and hands-on, while gentle structure helps children develop independence, communication, and social awareness.

Children engage in storytelling, creative arts, music, movement, and guided play activities that support language development, early thinking skills, and emotional expression. Through group play and shared experiences, learners begin to collaborate, listen, and express their ideas with confidence.`,
      image: pp1Image,
      imageAlt: "Children learning in PP1 classroom",
    },
    {
      title: "PP2 (Ages 4–6)",
      description: `Our PP2 program deepens the learning journey as children develop greater independence, critical thinking, and social awareness. At this level, learners continue to explore through hands-on discovery, while experiencing more intentional skill-building in literacy, numeracy, and creative expression.

Children engage in activities that develop phonics understanding, early mathematics, fine motor skills, collaborative play, and independent problem-solving. Through rich learning experiences in literacy corners, mathematics exploration stations, creative arts, and outdoor investigations, learners build confidence, resilience, and a love of learning.`,
      image: pp2Image,
      imageAlt: "Students in PP2 classroom learning together",
    },
    {
      title: "Grade 1 (Ages 6–7)",
      description: `Our Grade 1 program marks an exciting transition, where young learners continue to build on a strong foundation while developing increasing independence, academic curiosity, and self-confidence. Learning remains active, interactive, and meaningful, connecting real-world experiences with growing literacy, numeracy, and critical thinking skills.

Learners engage in structured reading and writing activities, problem-solving in mathematics, scientific exploration, creative expression, and collaborative group projects. Through guided inquiry, hands-on learning, and meaningful connections to everyday life, Grade 1 students develop the skills, mindset, and joy they need to thrive both now and in the future.`,
      image: grade1Image,
      imageAlt: "Grade 1 students working on academic activities",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#1F1B62",
        py: { xs: 6, md: 8 },
      }}
    >
      {programmes.map((programme, index) => (
        <ProgrammeCard
          key={index}
          title={programme.title}
          description={programme.description}
          image={programme.image}
          imageAlt={programme.imageAlt}
        />
      ))}
    </Box>
  );
};

export default ProgrammesSection;
