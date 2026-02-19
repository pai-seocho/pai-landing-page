import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";

const PARTNERS = [
  "현대자동차",
  "관세청",
  "대검찰청",
  "국방부",
  "신한금융그룹",
  "국세청",
  "EBS",
  "코오롱베니트",
  "행정안전부",
  "탄자니아 관세청",
  "한국고용정보원",
  "삼성서울병원",
  "Deloitte",
  "KT ds",
  "멀티캠퍼스",
] as const;

export function Partners() {
  return (
    <section className="py-24 md:py-36">
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
            {PARTNERS.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-lg border border-border/60 bg-white px-4"
              >
                <span className="text-sm font-medium text-foreground/50">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
