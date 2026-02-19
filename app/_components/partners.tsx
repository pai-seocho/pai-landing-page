import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";

const PARTNERS = [
  { name: "현대자동차", logo: "/logos/hyundai.svg" },
  { name: "관세청", logo: "/logos/customs.svg" },
  { name: "대검찰청", logo: "/logos/prosecution.svg" },
  { name: "국방부", logo: "/logos/defense.svg" },
  { name: "신한금융그룹", logo: "/logos/shinhan.svg" },
  { name: "국세청", logo: "/logos/nts.svg" },
  { name: "EBS", logo: "/logos/ebs.svg" },
  { name: "코오롱베니트", logo: "/logos/kolon.svg" },
  { name: "행정안전부", logo: "/logos/mois.svg" },
  { name: "탄자니아 관세청", logo: "/logos/tanzania.svg" },
  { name: "한국고용정보원", logo: "/logos/keis.svg" },
  { name: "삼성서울병원", logo: "/logos/samsung-hospital.svg" },
  { name: "Deloitte", logo: "/logos/deloitte.svg" },
  { name: "KT ds", logo: "/logos/ktds.svg" },
  { name: "멀티캠퍼스", logo: "/logos/multicampus.svg" },
] as const;

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-lg border border-border/60 bg-white px-4">
      <span className="text-sm font-medium text-foreground/50">{name}</span>
    </div>
  );
}

export function Partners() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <Container>
        <ScrollReveal>
          <p className="text-center text-lg font-medium text-muted-foreground md:text-xl">
            도메인 지식의 빠른 습득과 커뮤니케이션을 통한 성공사례가
            <br className="hidden md:block" />
            퍼블릭에이아이의 가치를 입증합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-5 md:gap-6">
            {PARTNERS.map((partner) => (
              <LogoPlaceholder key={partner.name} name={partner.name} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
