import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HomepageOpening } from "@/components/home/homepage-opening";
import { experiences, featuredProjects } from "@/data/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <HomepageOpening />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ExperienceSection experiences={experiences} />
    </main>
  );
}
