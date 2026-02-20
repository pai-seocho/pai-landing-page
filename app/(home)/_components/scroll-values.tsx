'use client'

import { CoverImage } from '@/app/_components/cover-image'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
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

const CONTENT_HEIGHT = 640

export function ScrollValues() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeValue, setActiveValue] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const index = Math.min(
      Math.floor(progress * VALUES.length),
      VALUES.length - 1,
    )
    setActiveValue((prev) => (prev === index ? prev : index))
  })

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${VALUES.length * 150}vh`,
        marginBlock: `calc(${CONTENT_HEIGHT / 2}px - 50vh)`,
      }}
    >
      <div className='sticky top-0 flex h-screen items-center'>
        <div
          className='grid w-full grid-cols-2 items-start'
          style={{ height: CONTENT_HEIGHT }}
        >
          <div className='flex flex-col mr-48'>
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
                className='mt-24'
              >
                <h3 className='text-3xl font-bold'>
                  {VALUES[activeValue].title}
                </h3>
                <p className='mt-4 text-lg leading-relaxed'>
                  {VALUES[activeValue].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className='self-stretch'>
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={activeValue}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='h-full'
              >
                <CoverImage
                  alt={VALUES[activeValue].image}
                  aspectRatio=''
                  className='h-full'
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
