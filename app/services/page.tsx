import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageLayout } from '@/app/_components/page-layout'
import { CoverImage } from '@/app/_components/cover-image'
import { ButtonLink } from '@/app/_components/button-link'
import { ScrollReveal } from '../_components/scroll-reveal'

export const metadata: Metadata = {
  title: '서비스 — PublicAI',
  description: '퍼블릭에이아이가 제공하는 AI 서비스를 소개해요.',
}

const SERVICES = [
  {
    title: 'AIMP',
    description:
      'No-code 기반 데이터·AI 서비스 통합 관리 시스템이에요. AI 프로젝트 관리, 서비스 운영, 분석 결과 관리까지 GPU 기반 인프라와 연동하여 한곳에서 처리해요. GS 1등급 인증을 받았어요.',
    image: '/images/services/aimp.avif',
  },
] as const

export default function ServicesPage() {
  return (
    <PageLayout
      title={
        <>
          데이터에서 서비스까지
          <br />
          AI의 모든 과정을 고민해요
        </>
      }
    >
      <ScrollReveal delay={0.2}>
        <div className='divide-y'>
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className='grid grid-cols-2 items-center gap-32 py-16'
            >
              <div>
                <h2 className='text-4xl font-bold'>{service.title}</h2>
                <p className='text-muted-foreground mt-6 text-lg leading-relaxed'>
                  {service.description}
                </p>
              </div>
              <CoverImage
                src={service.image}
                alt={service.title}
                aspectRatio='aspect-[16/10]'
              />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>AI 도입이 필요하신가요?</h2>
          <p className='text-muted-foreground mt-4 text-lg'>
            프로젝트 규모와 상관없이 편하게 문의해주세요.
          </p>
          <ButtonLink href='mailto:info@publicai.co.kr' className='mt-8'>
            문의하기
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </ScrollReveal>
    </PageLayout>
  )
}
