import Image from "next/image";
import styles from "./internship-result-evidence.module.css";

type ResultEvidence = {
  image: string;
  alt: string;
  title: string;
  summary: string;
  caption: string;
  points: readonly {
    title: string;
    body: string;
  }[];
};

type InternshipResultEvidenceProps = {
  evidence: ResultEvidence;
};

export function InternshipResultEvidence({ evidence }: InternshipResultEvidenceProps) {
  return (
    <article className={styles.result} aria-labelledby="internship-result-title">
      <div className={styles.copy}>
        <h3 id="internship-result-title">{evidence.title}</h3>
        <p className={styles.summary}>{evidence.summary}</p>
        <ol className={styles.points}>
          {evidence.points.map((point) => (
            <li key={point.title}>
              <h4>{point.title}</h4>
              <p>{point.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <figure className={styles.figure}>
        <div className={styles.screen}>
          <Image
            src={evidence.image}
            alt={evidence.alt}
            width={432}
            height={960}
            sizes="(max-width: 48rem) calc(100vw - 3rem), 26rem"
          />
        </div>
        <figcaption>{evidence.caption}</figcaption>
      </figure>
    </article>
  );
}
