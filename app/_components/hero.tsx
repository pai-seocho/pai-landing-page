"use client";

import { motion } from "motion/react";
import { Container } from "@/app/_components/container";
import { CoverImage } from "@/app/_components/cover-image";
import { EASE_OUT } from "@/app/_lib/motion";

export function Hero() {
  return (
    <section className="pt-36 md:pt-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <h1 className="text-4xl font-bold leading-snug md:text-5xl">
            AI를 연구하고, 개발하고,
            <br />
            교육합니다
          </h1>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
      >
        <Container className="mt-12 md:mt-16">
          <CoverImage alt="대표 이미지" aspectRatio="aspect-[21/9]" />
        </Container>
      </motion.div>
    </section>
  );
}
