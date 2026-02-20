'use client'

import { useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'

interface CounterProps {
  target: number
  suffix?: string
  label: string
}

function Counter({ target, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, {
    stiffness: target > 100 ? 150 : 50,
    damping: target > 100 ? 30 : 20,
  })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, motionVal, target])

  return (
    <div ref={ref}>
      <div className='flex items-baseline gap-1'>
        <motion.span className='text-foreground text-5xl font-bold'>
          {rounded}
        </motion.span>
        {suffix && (
          <span className='text-foreground text-3xl font-bold'>{suffix}</span>
        )}
      </div>
      <p className='text-muted-foreground mt-2 text-base'>{label}</p>
    </div>
  )
}

const STATS = [
  { target: 2018, label: '설립' },
  { target: 30, suffix: '명', label: '팀원' },
  { target: 40, suffix: '+', label: '수행 프로젝트' },
] as const

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className='grid grid-cols-3 gap-8'>
      {STATS.map((stat) => (
        <Counter key={stat.label} {...stat} />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className='flex items-baseline gap-1'>
          <span className='text-foreground text-5xl font-bold'>GS</span>
          <span className='text-foreground text-3xl font-bold'>1등급</span>
        </div>
        <p className='text-muted-foreground mt-2 text-base'>
          소프트웨어 품질 인증
        </p>
      </motion.div>
    </div>
  )
}
