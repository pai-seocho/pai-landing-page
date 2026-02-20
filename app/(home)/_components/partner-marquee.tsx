'use client'

import { useState } from 'react'
import Image from 'next/image'

const PARTNERS = [
  { name: '현대', logo: '/partners/hyundai.png' },
  { name: '검찰청', logo: '/partners/prosecution.png' },
  { name: '국세청', logo: '/partners/nts.png' },
  { name: 'KB국민은행', logo: '/partners/kb-bank.png' },
  { name: '삼성서울병원', logo: '/partners/samsung-hospital.png' },
  { name: 'Deloitte', logo: '/partners/deloitte.png' },
  { name: '네이버클라우드', logo: '/partners/naver-cloud.png' },
  { name: 'KOTRA', logo: '/partners/kotra.png' },
  { name: 'KLID', logo: '/partners/klid.png' },
  { name: '한국고용정보원', logo: '/partners/keis.png' },
  { name: '한국보건산업진흥원', logo: '/partners/khidi.png' },
  { name: '해양수산과학기술진흥원', logo: '/partners/kimst.png' },
  { name: '풀무원', logo: '/partners/pulmuone.png' },
  { name: '농촌진흥청', logo: '/partners/rda.png' },
  { name: '인천광역시교육청', logo: '/partners/incheon-edu.png' },
  { name: '인하대학교', logo: '/partners/inha-univ.png' },
  { name: '호남대학교', logo: '/partners/honam-univ.png' },
  { name: '전북특별자치도', logo: '/partners/jeonbuk.png' },
] as const

function PartnerLogo({ partner }: { partner: (typeof PARTNERS)[number] }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <span className='text-foreground/50 text-sm font-medium'>
        {partner.name}
      </span>
    )
  }

  return (
    <Image
      src={partner.logo}
      alt={partner.name}
      width={240}
      height={80}
      className='h-20 w-auto object-contain'
      loading='eager'
      onError={() => setImgError(true)}
    />
  )
}

export function PartnerMarquee() {
  return (
    <div className='group overflow-hidden'>
      <div
        className='flex w-max gap-16'
        style={{
          animation: 'marquee 60s linear infinite',
          willChange: 'transform',
        }}
      >
        {[...PARTNERS, ...PARTNERS].map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className='flex h-48 shrink-0 items-center justify-center px-4'
          >
            <PartnerLogo partner={partner} />
          </div>
        ))}
      </div>
    </div>
  )
}
