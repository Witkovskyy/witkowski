import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <h1>Hello!</h1>
      <p className={styles.paragraph}>
        My name is Łukasz. I'm currently stydying computer science at PUT Poznań.
        Your average Unity enjoyer. Trying to make it into the bussiness.
        Apart from IT, I'm a music and sports geek.
      </p>
    </div>
  );
  }