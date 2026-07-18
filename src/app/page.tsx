import { CapabilitySection } from "@/components/home/capability-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { LatestContentSection } from "@/components/home/latest-content-section";
import {
  capabilities,
  experiences,
  featuredProjects,
  latestContent,
} from "@/data/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <HeroSection />
      <CapabilitySection capabilities={capabilities} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ExperienceSection experiences={experiences} />
      <LatestContentSection contents={latestContent} />
    </main>
  );
}
