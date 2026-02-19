import Link from "next/link";
import { Container } from "@/app/_components/container";

const FOOTER_LINKS = [
  {
    title: "회사",
    links: [
      { label: "회사소개", href: "/about" },
      { label: "서비스", href: "/services" },
      { label: "팀문화", href: "/culture" },
    ],
  },
  {
    title: "채용",
    links: [
      { label: "채용 공고", href: "/careers" },
      { label: "블로그", href: "/blog" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-primary">PUBLIC</span>
              <span className="text-foreground">AI</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              누구나 인공지능의 혜택을
              <br />
              받을 수 있는 세상을 만듭니다.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">연락처</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>TEL 070-4788-8825</li>
              <li>
                <a
                  href="mailto:info@publicai.co.kr"
                  className="transition-colors hover:text-foreground"
                >
                  info@publicai.co.kr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>서울 서초구 서초대로 48길 107 에덴빌딩 2층</p>
          <p>
            &copy; {new Date().getFullYear()} PublicAI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
