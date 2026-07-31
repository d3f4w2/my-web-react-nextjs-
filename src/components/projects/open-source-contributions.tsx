import type { OpenSourceContribution } from "@/data/open-source";
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
        <div>
          <p className={styles.eyebrow}>开源贡献</p>
          <h2 id="open-source-title">代码已经进入上游。</h2>
        </div>
        <p className={styles.policy}>
          这里只记录由外部项目维护者确认合并的贡献。开放 PR 和个人仓库合并不计入成果。
        </p>
      </header>

      <div className={styles.list}>
        {contributions.map((contribution) => (
          <article
            className={styles.card}
            key={`${contribution.repository}-${contribution.pullRequest}`}
          >
            <div className={styles.cardHeader}>
              <p>
                {contribution.repository} <span>#{contribution.pullRequest}</span>
              </p>
              <strong>MERGED</strong>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.copy}>
                <h3>{contribution.title}</h3>
                <p>{contribution.summary}</p>
              </div>

              <dl className={styles.facts}>
                {contribution.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.evidence}>
              <p>我完成的工作</p>
              <ul>
                {contribution.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <footer className={styles.footer}>
              <div className={styles.merge}>
                <p>{contribution.scope}</p>
                <span>
                  {contribution.mergedAt} · merged by {contribution.mergedBy} ·{" "}
                  <a
                    href={contribution.commitUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contribution.mergeCommit}
                  </a>
                </span>
              </div>

              <div className={styles.links}>
                <a
                  href={contribution.pullRequestUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  查看合并 PR
                </a>
                <a
                  href={contribution.issueUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  关联 Issue
                </a>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
