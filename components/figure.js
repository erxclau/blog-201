import styles from "../styles/figure.module.css";

const Figure = ({ children, href, title, dek }) => (
  <figure className={styles.figure}>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={title}
    >
      {children}
    </a>
    <figcaption>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <p>
        {dek}
      </p>
    </figcaption>
  </figure>
);

export default Figure;

