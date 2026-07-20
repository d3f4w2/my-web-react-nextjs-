import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.label}>
        <span>{index}</span>
        <p className={styles.eyebrow}>{eyebrow}</p>
      </div>
      <div className={styles.copy}>
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
