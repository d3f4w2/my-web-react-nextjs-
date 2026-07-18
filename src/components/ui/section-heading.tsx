import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.copy}>
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
