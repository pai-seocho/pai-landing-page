import { PageLayout } from '@/app/_components/page-layout'
import { ScrollReveal } from '@/app/_components/scroll-reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회사 소개 — PublicAI',
  description: '퍼블릭에이아이의 미션, 비전, 연혁을 소개해요.',
}

const STATS = [
  { label: '설립', value: '2018' },
  { label: '팀원', value: '30명' },
  { label: '수행 프로젝트', value: '40+' },
  { label: 'GS 인증', value: '1등급' },
] as const

const HISTORY = [
  {
    year: '2025',
    items: [
      'GS 인증(소프트웨어 품질 인증) 1등급 획득',
      '아산병원 사전진단 AICC PoC',
      '현대오토에버 MLOps 플랫폼 확산',
    ],
  },
  {
    year: '2024',
    items: [
      '탄자니아 관세청 LLM 기반 HS코드 추천',
      '국세청 GraphDB 기반 RAG AICC PoC',
      'KOTRA 무역투자 GPT 구축',
      '풀무원 AI 기반 김 생육 모니터링',
    ],
  },
  {
    year: '2023',
    items: [
      '현대자동차 MLOps 플랫폼 구축',
      '신한금융그룹 AICC 구축',
      'EBS AI 문제 추천 서비스',
      '플레이스인 건축설계 자동화 서비스',
    ],
  },
  {
    year: '2022',
    items: [
      '대검찰청 빅데이터 기반 디지털 증거분석 3차',
      '행정안전부 행정문서 데이터 전환',
    ],
  },
  {
    year: '2021',
    items: [
      'WCO 데이터 분석 교육 과정',
      '관세청 인장/서명 위조 탐지',
      'AJ네트웍스 DT ISP 컨설팅',
    ],
  },
  {
    year: '2020',
    items: [
      '벤처기업 인증',
      '현대자동차 자율주행 도로 노면 이상 탐지',
      '관세청 영상 판독 시스템 착수',
    ],
  },
  {
    year: '2019',
    items: [
      '법인 전환',
      '청년창업사관학교 9기 선정',
      'NIA 손글씨 인식 AI 모델',
    ],
  },
  {
    year: '2018',
    items: ['PUBLIC AI 설립', '기아자동차 버튼 인식 AI PoC'],
  },
] as const

export default function AboutPage() {
  return (
    <PageLayout title={<>PUBLIC + AI</>}>
      <ScrollReveal delay={0.2}>
        <div className='grid grid-cols-4 gap-8'>
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className='text-primary text-4xl font-bold'>{stat.value}</p>
              <p className='text-muted-foreground mt-2 text-base'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <h2 className='text-3xl font-bold'>
          누구나 인공지능의 혜택을 받을 수 있는 세상
        </h2>
        <p className='mt-4 max-w-2xl text-lg leading-relaxed'>
          퍼블릭에이아이는 AI 기술을 다양한 산업에 적용하여 혁신을 돕고 있어요.
          인프라부터 데이터, AI 모델, 화면 개발까지 — 엔드투엔드로 함께해요.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <h2 className='text-4xl font-bold'>걸어온 길</h2>

        <div className='mt-16 divide-y'>
          {HISTORY.map((entry, i) => (
            <ScrollReveal key={entry.year} delay={i * 0.05}>
              <div className='grid grid-cols-6 gap-8 py-10'>
                <span className='text-foreground text-3xl font-bold'>
                  {entry.year}
                </span>
                <ul className='col-span-5 space-y-2'>
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className='text-muted-foreground text-lg leading-relaxed'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </PageLayout>
  )
}
