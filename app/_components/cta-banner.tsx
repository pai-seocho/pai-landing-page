import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <ScrollReveal>
          <div className="grid items-center overflow-hidden rounded-2xl bg-primary md:grid-cols-2">
            <div className="px-8 py-16 md:px-16 md:py-20">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                함께 만들어갈
                <br />
                팀원을 찾고 있습니다
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                퍼블릭에이아이에서 AI의 가치를 함께 만들어갈 동료를 기다립니다.
              </p>
              <Link
                href="/careers"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-base font-semibold text-primary transition-colors hover:bg-white/90"
              >
                채용 공고 보기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
