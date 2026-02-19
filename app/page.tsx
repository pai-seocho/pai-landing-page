import { Hero } from "@/app/_components/hero";
import { Values } from "@/app/_components/values";
import { Services } from "@/app/_components/services";
import { Partners } from "@/app/_components/partners";
import { CTABanner } from "@/app/_components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Services />
      <Partners />
      <CTABanner />
    </>
  );
}
