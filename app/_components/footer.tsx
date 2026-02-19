import Link from "next/link";
import { Container } from "@/app/_components/container";

const NAV_LINKS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "팀문화", href: "/culture" },
  { label: "채용", href: "/careers" },
  { label: "블로그", href: "/blog" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Link href="/" className="font-bold">
              (주)퍼블릭에이아이
            </Link>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>TEL 070-4788-8825</p>
              <p>
                <a
                  href="mailto:info@publicai.co.kr"
                  className="transition-colors hover:text-foreground"
                >
                  info@publicai.co.kr
                </a>
              </p>
              <p>서울 서초구 서초대로 48길 107 에덴빌딩 2층</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
