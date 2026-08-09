import Image from "next/image";
import type { OpenSourceContribution } from "@/data/open-source";
import { openSourceProjectProfiles } from "@/data/open-source";
import styles from "./open-source-contributions.module.css";

type OpenSourceContributionsProps = {
  contributions: readonly OpenSourceContribution[];
};

export function OpenSourceContributions({
  contributions,
}: OpenSourceContributionsProps) {
  return (
    <section
      id="open-source-contributions"
      className={styles.section}
      aria-labelledby="open-source-title"
    >
      <header className={styles.sectionHeader}>
        <h2 id="open-source-title">
          代码进入了
          <span>真正的大项目。</span>
        </h2>
      </header>

      <div className={styles.projects}>
        {openSourceProjectProfiles.map((profile, projectIndex) => {
          const projectContributions = contributions.filter(
            (contribution) => contribution.repository === profile.repository,
          );

          return (
            <article
              className={styles.project}
              data-project={projectIndex + 1}
              key={profile.repository}
            >
              <div className={styles.authority}>
                <div className={styles.brandLockup}>
                  <div className={styles.logoStage}>
                    <Image
                      className={styles.logo}
                      data-logo={profile.repository.toLowerCase()}
                      src={profile.logo}
                      alt={profile.logoAlt}
                      width={profile.repository === "Mastra" ? 4096 : 1365}
                      height={profile.repository === "Mastra" ? 1001 : 1365}
                    />
                  </div>
                  <p>{profile.position}</p>
                </div>

                <div className={styles.reach}>
                  <strong>{profile.reach}</strong>
                  <span>{projectContributions.length} 项修改已由上游合并</span>
                </div>

                <div className={styles.projectCopy}>
                  <p>{profile.description}</p>
                  <ul>
                    {profile.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectLinks}>
                  <a href={profile.officialUrl} target="_blank" rel="noreferrer">
                    打开项目官网
                  </a>
                  <a href={profile.sourceUrl} target="_blank" rel="noreferrer">
                    查看官方代码仓库
                  </a>
                </div>
              </div>

              <div className={styles.contributionList}>
                {projectContributions.map((contribution) => (
                  <article
                    className={styles.contribution}
                    key={`${contribution.repository}-${contribution.pullRequest}`}
                  >
                    <div className={styles.contributionHeading}>
                      <h3>{contribution.title}</h3>
                      <a
                        href={contribution.pullRequestUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        查看已合并 PR #{contribution.pullRequest}
                      </a>
                    </div>

                    <p className={styles.summary}>{contribution.summary}</p>

                    <dl className={styles.facts}>
                      {contribution.facts.map((fact) => (
                        <div key={fact.label}>
                          <dt>{fact.label}</dt>
                          <dd>{fact.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className={styles.evidence}>
                      <h4>我完成的工作</h4>
                      <ul>
                        {contribution.evidence.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <footer className={styles.contributionFooter}>
                      <p>{contribution.scope}</p>
                      <a
                        href={contribution.commitUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        查看合并提交 {contribution.mergeCommit}
                      </a>
                    </footer>
                  </article>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
