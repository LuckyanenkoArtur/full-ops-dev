import styles from "./scroller-icon.module.scss";

export const ScrollerIcon = () => (
  <svg
    className={styles["scroller-icon"]}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="none"
  >
    <path
      d="M10.4167 31.25C10.4167 35.1177 11.9533 38.8273 14.6882 41.5621C17.4231 44.2971 21.1324 45.8331 25.0001 45.8331C28.8678 45.8331 32.5772 44.2971 35.3122 41.5621C38.047 38.8273 39.5834 35.1177 39.5834 31.25V18.75C39.5834 14.8823 38.047 11.173 35.3122 8.43812C32.5772 5.70323 28.8678 4.16669 25.0001 4.16669C21.1324 4.16669 17.4231 5.70323 14.6882 8.43812C11.9533 11.173 10.4167 14.8823 10.4167 18.75V31.25Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      className={styles["scroller-line"]}
      d="M25 12.5V29.1667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      className={styles["scroller-arrow"]}
      d="M31.25 22.9167L25 29.1667L18.75 22.9167"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
