'use client'

import { PartnerMarquee } from '@/app/(home)/_components/partner-marquee'
import { CoverImage } from '@/app/_components/cover-image'
import { PageLayout } from '@/app/_components/page-layout'
import { ScrollReveal } from '@/app/_components/scroll-reveal'
import { ArrowRight } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'

const VALUES = [
  {
    title: '모두에게 열린 AI',
    description:
      '산업 규모와 조직 형태에 상관없이 누구나 AI를 이해하고, 적용하고, 활용할 수 있도록 기술 접근성을 높여요.',
    image: '접근성',
  },
  {
    title: '맞춤형 AI 개발',
    description:
      '분석-설계-구축-운영까지 각 산업과 조직의 방식에 맞춰 실제로 작동하는 맞춤형 AI를 개발하고 내재화해요.',
    image: '맞춤 개발',
  },
  {
    title: '신뢰할 수 있는 AI',
    description:
      '검증 가능한 데이터, 투명한 모델 운영, 책임 있는 AI 거버넌스를 통해 믿고 사용할 수 있는 AI를 만들어요.',
    image: '신뢰와 투명성',
  },
] as const

const SERVICES = [
  {
    title: 'End to End MLOps 플랫폼',
    description:
      'AI 프로젝트 관리부터 서비스 운영, 분석 결과 관리까지 데이터-AI 전주기를 하나의 플랫폼에서.',
  },
  {
    title: 'LLM/RAG 기반 AI 서비스',
    description:
      'RAG 기반 상담 자동화, 추천 서비스, 업무 자동화 등 대규모 언어 모델을 활용한 실무 솔루션.',
  },
  {
    title: 'AI 활용 시스템 구축',
    description:
      '웹/앱 서비스, 백오피스, 기간계 시스템에 AI를 접목하여 기존 업무 흐름을 혁신해요.',
  },
  {
    title: 'AI 기획·교육·컨설팅',
    description:
      '비전공자부터 현업 실무자까지, 조직의 목표에 맞춘 AI 전략 수립과 실무 중심 교육.',
  },
] as const

export default function Home() {
  const valuesRef = useRef<HTMLDivElement>(null)
  const [activeValue, setActiveValue] = useState(0)

  const { scrollYProgress } = useScroll({
    target: valuesRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const index = Math.min(
      Math.floor(progress * VALUES.length),
      VALUES.length - 1,
    )
    setActiveValue(index)
  })

  return (
    <PageLayout
      title={
        <>
          AI의 가치를 현실로,
          <br />
          퍼블릭에이아이
        </>
      }
    >
      <CoverImage alt='대표 이미지' aspectRatio='aspect-[21/9]' />

      <section ref={valuesRef} style={{ height: `${VALUES.length * 100}vh` }}>
        <div className='sticky top-0 flex h-screen items-center'>
          <div className='grid w-full grid-cols-2 items-start gap-24'>
            <div className='flex flex-col'>
              <h2 className='text-4xl font-bold'>
                퍼블릭에이아이가
                <br />
                AI를 만드는 원칙
              </h2>

              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='mt-32'
                >
                  <h3 className='text-2xl font-bold'>
                    {VALUES[activeValue].title}
                  </h3>
                  <p className='text-muted-foreground mt-4 text-lg leading-relaxed'>
                    {VALUES[activeValue].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CoverImage
                    alt={VALUES[activeValue].image}
                    aspectRatio='aspect-[1/1]'
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <div>
        <ScrollReveal>
          <div className='flex flex-row items-end justify-between gap-4'>
            <h2 className='text-4xl font-bold'>AI의 모든 과정을 고민해요</h2>
            <Link
              href='/services'
              className='text-primary hover:text-primary/80 inline-flex items-center gap-2 text-base font-semibold transition-colors'
            >
              서비스 더 알아보기
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className='divide-border border-border mt-12 divide-y border-t'>
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <div className='py-10'>
                <h3 className='text-2xl font-bold'>{service.title}</h3>
                <p className='text-muted-foreground mt-2 text-lg leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div>
        <ScrollReveal>
          <h2 className='text-4xl font-bold'>다양한 파트너들과 함께해요</h2>
        </ScrollReveal>

        <div className='mt-16'>
          <PartnerMarquee />
        </div>
      </div>
    </PageLayout>
  )
}
