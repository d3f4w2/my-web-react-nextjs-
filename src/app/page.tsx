import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HomepageOpening } from "@/components/home/homepage-opening";
import { PageFrame } from "@/components/layout/page-frame";
import { experiences, featuredProjects } from "@/data/home";
import styles from "./page.module.css";

/*
THESIS: An Agent portfolio should feel like a live transmission, not a static resume.
OWN-WORLD: Acid signal color, torn editorial fields, raw media, and evidence-led copy form one visual language.
STORY: Conviction first, then real product execution, personal systems work, and technical writing.
FIRST VIEWPORT: No project card or biography. One proposition and one decisive route into the work.
FORM: Pirate-radio transmission log, grounded direction 4 from concept seed 13249784.
FINISH: The implementation closes with browser review, detector checks, and documented design rules.
*/

export default function Home() {
  return (
    <PageFrame footer="primary">
      <main id="main-content" className={styles.main}>
        <HomepageOpening />
        <FeaturedProjectsSection projects={featuredProjects} />
        <ExperienceSection experiences={experiences} />
      </main>
    </PageFrame>
  );
}
