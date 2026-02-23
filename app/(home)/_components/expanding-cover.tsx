'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ExpandingCoverProps {
  src: string
  alt: string
}

export function ExpandingCover({ src, alt }: ExpandingCoverProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [inset, setInset] = useState(0)

  useLayoutEffect(() => {
    function measure() {
      if (!contentRef.current) return
      setInset(contentRef.current.getBoundingClientRect().left)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const clipInset = useTransform(scrollYProgress, [0, 1], [inset, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [16, 0])

  const clipPath = useTransform(
    [clipInset, borderRadius],
    ([x, r]: number[]) => `inset(0 ${x}px round ${r}px)`,
  )

  return (
    <div ref={sectionRef} style={{ height: '150vh' }}>
      <div className='sticky top-24' ref={contentRef}>
        <motion.div
          className='bg-muted relative aspect-21/9 overflow-hidden'
          style={{
            marginInline: `-${inset}px`,
            clipPath,
            willChange: 'clip-path',
          }}
        >
          <Image src={src} alt={alt} fill className='object-cover' />
        </motion.div>
      </div>
    </div>
  )
}
