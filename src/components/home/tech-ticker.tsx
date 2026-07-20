import styles from "./tech-ticker.module.css";

const tickerItems = [
  "OBSERVE / 观察",
  "PLAN / 计划",
  "ACT / 行动",
  "VERIFY / 验证",
  "DOCUMENT / 记录",
  "REPEAT / 迭代",
] as const;

export function TechTicker() {
  return (
    <section className={styles.ticker} aria-label="Agent 技术方向">
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <div className={styles.group} aria-hidden={copy === 1} key={copy}>
            {tickerItems.map((item) => (
              <span key={`${copy}-${item}`}>
                {item}
                <i aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
