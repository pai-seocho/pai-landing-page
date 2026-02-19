import { ArrowRight } from "lucide-react";
import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { ButtonLink } from "@/app/_components/button-link";

export function CTABanner() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-20">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              함께 만들어갈
              <br />
              팀원을 찾고 있습니다
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              퍼블릭에이아이에서 AI의 가치를 함께 만들어갈 동료를 기다립니다.
            </p>
            <ButtonLink href="/careers" variant="white" className="mt-8">
              채용 공고 보기
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
