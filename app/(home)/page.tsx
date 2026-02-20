import { AnimatedStats } from '@/app/(home)/_components/animated-stats'
import { ExpandingCover } from '@/app/(home)/_components/expanding-cover'
import { PartnerMarquee } from '@/app/(home)/_components/partner-marquee'
import { ScrollValues } from '@/app/(home)/_components/scroll-values'
import { PageLayout } from '@/app/_components/page-layout'
import { ScrollReveal } from '@/app/_components/scroll-reveal'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

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

const PROJECTS = [
  {
    metric: '정확도 91%',
    headline: '세법 상담, AI가 정확하게 답해요',
    description:
      '서로 얽힌 1,200건 법 조항의 관계를 학습한 AI가 5점 만점에 4.55점의 정확도로 답변해요.',
    client: '국세청',
  },
  {
    metric: '3개국 도입',
    headline: '한국에서 만든 AI, 세계가 선택했어요',
    description:
      '3차에 걸쳐 검증된 위조품 판독 AI가 탄자니아 관세청과 국제관세기구에 도입됐어요.',
    client: '관세청 · WCO',
  },
  {
    metric: '3년 연속',
    headline: '자율주행팀이 매년 다시 찾아요',
    description:
      '도로 이상탐지, 배터리 예측, MLOps 플랫폼까지 — 매년 새로운 프로젝트를 함께하고 있어요.',
    client: '현대자동차',
  },
] as const

export default function Home() {
  return (
    <PageLayout
      title={
        <>
          AI, 모두의 일상으로
          <br />
          퍼블릭에이아이
        </>
      }
    >
      <ScrollReveal delay={0.2}>
        <ExpandingCover />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <AnimatedStats />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
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

        <div className='mt-8 divide-y'>
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <div className='py-8'>
                <h3 className='text-2xl font-bold'>{service.title}</h3>
                <p className='text-muted-foreground mt-2 text-lg leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ScrollValues />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className='text-4xl font-bold'>기술은 현장에서 증명돼요</h2>

        <div className='mt-16 grid grid-cols-3 gap-6'>
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.client} delay={i * 0.05}>
              <div className='flex h-full flex-col justify-between rounded-2xl pr-8'>
                <div>
                  <p className='text-primary bg-primary/10 w-fit rounded-full px-3 py-1 text-sm font-semibold'>
                    {project.client}
                  </p>
                  <p className='mt-6 text-4xl font-bold'>{project.metric}</p>
                </div>
                <div className='mt-10'>
                  <h3 className='text-lg font-bold'>{project.headline}</h3>
                  <p className='text-muted-foreground mt-2 text-base leading-relaxed'>
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className='text-4xl font-bold'>다양한 파트너들과 함께해요</h2>

        <div className='mt-16'>
          <PartnerMarquee />
        </div>
      </ScrollReveal>
    </PageLayout>
  )
}
