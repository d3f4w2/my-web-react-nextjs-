import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { experiences, featuredProjects } from "@/data/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ExperienceSection experiences={experiences} />
    </main>
  );
}
