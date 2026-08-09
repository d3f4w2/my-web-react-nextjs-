import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/layout/page-frame";
import { JsonLd } from "@/components/metadata/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site";
import styles from "./contact.module.css";

const description = "通过邮箱、微信或 GitHub 直接联系，也可以打开完整网页简历。";

export const metadata: Metadata = {
  title: "联系",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "联系",
    description,
    url: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "联系",
  url: absoluteUrl("/contact"),
  description,
};

export default function ContactPage() {
  return (
    <PageFrame activeSection="contact" footer="none">
      <JsonLd data={contactJsonLd} />
      <main id="main-content" className={styles.page}>
        <div className={`site-container ${styles.poster}`}>
          <header className={styles.heading}>
            <h1>
              <span>有具体的事，</span>
              <span>直接联系。</span>
            </h1>
            <p>Agent、全栈开发、开源协作或 pi-go 共建，都可以直接聊。</p>
          </header>

          <section className={styles.email} aria-labelledby="contact-email-title">
            <h2 id="contact-email-title">邮箱</h2>
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section className={styles.wechat} aria-labelledby="contact-wechat-title">
            <div className={styles.wechatCopy}>
              <h2 id="contact-wechat-title">微信</h2>
              <p>打开微信扫一扫。</p>
            </div>
            <div className={styles.qrFrame}>
              <Image
                src="/wechat-contact.jpg"
                alt="微信联系二维码"
                fill
                priority
                sizes="(max-width: 720px) 68vw, 20rem"
              />
            </div>
          </section>

          <nav className={styles.routes} aria-label="其他入口">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <span>代码主页</span>
              <strong>GitHub</strong>
              <b aria-hidden="true">↗</b>
            </a>
            <Link href="/resume" transitionTypes={["nav-forward"]}>
              <span>经历与能力</span>
              <strong>网页简历</strong>
              <b aria-hidden="true">→</b>
            </Link>
          </nav>
        </div>
      </main>
    </PageFrame>
  );
}
