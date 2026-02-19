"use client";

import { motion } from "motion/react";
import { Container } from "@/app/_components/container";
import { CoverImage } from "@/app/_components/cover-image";

export function Hero() {
  return (
    <section className="pt-36 md:pt-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          }}
        >
          <h1 className="text-4xl font-bold leading-snug tracking-tight md:text-[56px] md:leading-tight">
            누구나 누리는
            <br />
            인공지능의 가치
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
            퍼블릭에이아이는 AI를 연구하고, 개발하고, 교육합니다.
            <br />
            다양한 산업에 맞춤형 AI 솔루션을 제공합니다.
          </p>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        }}
      >
        <Container className="mt-12 md:mt-16">
          <CoverImage
            alt="대표 이미지"
            aspectRatio="aspect-[21/9]"
            className="rounded-2xl"
          />
        </Container>
      </motion.div>
    </section>
  );
}
