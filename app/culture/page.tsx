import { ButtonLink } from '@/app/_components/button-link'
import { CoverImage } from '@/app/_components/cover-image'
import { PageLayout } from '@/app/_components/page-layout'
import { ScrollReveal } from '@/app/_components/scroll-reveal'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '팀문화 — PublicAI',
  description: '퍼블릭에이아이의 팀 구성, 일하는 방식, 복지를 소개해요.',
}

const WAYS = [
  {
    title: '문제 중심으로 일해요',
    description:
      '기술이 아닌 고객의 문제에서 출발해요. 해결할 가치가 있는 문제를 찾고, 가장 효과적인 방법을 선택해요.',
    image: '/images/culture/way-01.avif',
  },
  {
    title: '작게 시작하고 빠르게 검증해요',
    description:
      'PoC를 통해 빠르게 가설을 검증하고, 성과가 확인된 방향으로 확장해 나가요.',
    image: '/images/culture/way-02.avif',
  },
  {
    title: '함께 성장해요',
    description:
      '기술 공유, 코드 리뷰, 스터디를 통해 팀 전체의 역량을 높이고, 각자의 전문성을 존중해요.',
    image: '/images/culture/way-03.avif',
  },
] as const

const TEAMS = [
  {
    name: 'AI 연구',
    description:
      'NLP, 컴퓨터 비전, 시계열, 멀티모달 등 최신 AI 기술을 연구하고 실무에 적용 가능한 모델로 발전시켜요.',
  },
  {
    name: '개발',
    description:
      'MLOps 플랫폼부터 웹/앱 서비스까지, 안정적이고 확장 가능한 시스템을 설계하고 구축해요.',
  },
  {
    name: '기획·컨설팅',
    description:
      '고객의 비즈니스를 이해하고 AI가 실질적 가치를 만들 수 있는 전략을 함께 수립해요.',
  },
  {
    name: '교육',
    description:
      '비전공자부터 실무자까지, 대상에 맞는 모듈식 AI 교육 커리큘럼을 직접 설계하고 운영해요.',
  },
] as const

const BENEFITS = [
  { title: '유연 근무', description: '자율 출퇴근제 운영' },
  { title: '교육 지원', description: '도서·강의·컨퍼런스 지원' },
  { title: '간식·음료', description: '사무실 상시 제공' },
  { title: '장비 지원', description: '업무에 필요한 최신 장비' },
  { title: '휴가', description: '연차 + 리프레시 휴가' },
  { title: '건강', description: '종합 건강검진 지원' },
] as const

export default function CulturePage() {
  return (
    <PageLayout
      title={
        <>
          몰입하고, 공유하고,
          <br />
          함께 성장해요
        </>
      }
    >
      <ScrollReveal delay={0.2}>
        <CoverImage
          src='/images/culture/cover.avif'
          alt='팀 분위기'
          aspectRatio='aspect-[16/9]'
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className='text-4xl font-bold'>이렇게 일해요</h2>

        <div className='mt-16 space-y-16'>
          {WAYS.map((way, i) => (
            <ScrollReveal key={way.title} delay={i * 0.05}>
              <div className='grid grid-cols-2 items-center gap-24'>
                <div className={i % 2 === 1 ? 'order-2' : ''}>
                  <h3 className='text-3xl font-bold'>{way.title}</h3>
                  <p className='text-muted-foreground mt-4 text-lg leading-relaxed'>
                    {way.description}
                  </p>
                </div>
                <div className={i % 2 === 1 ? 'order-1' : ''}>
                  <CoverImage
                    src={way.image}
                    alt={way.title}
                    aspectRatio='aspect-[4/3]'
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className='text-4xl font-bold'>팀 구성</h2>

        <div className='mt-16 divide-y'>
          {TEAMS.map((team, i) => (
            <ScrollReveal key={team.name} delay={i * 0.05}>
              <div className='py-10'>
                <h3 className='text-lg font-bold'>{team.name}</h3>
                <p className='text-muted-foreground mt-2 text-base leading-relaxed'>
                  {team.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className='text-4xl font-bold'>복지 및 지원</h2>

        <div className='mt-16 grid grid-cols-3 gap-x-8 gap-y-8'>
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.05}>
              <p className='text-base font-bold'>{benefit.title}</p>
              <p className='text-muted-foreground mt-1 text-sm'>
                {benefit.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>
            퍼블릭에이아이와 함께 할
            <br />
            동료를 찾고 있어요
          </h2>
          <ButtonLink href='/careers' className='mt-8'>
            채용 공고 보기
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </ScrollReveal>
    </PageLayout>
  )
}
