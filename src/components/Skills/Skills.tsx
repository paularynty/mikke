import styles from "./skills.module.css";

export const Skill = (elements: { category: string; skills: string[] }) => {
  const { category, skills } = elements;
  return (
    <div className={styles.skillSubcontainer}>
      <h1>{category}</h1>
      <ul className={styles.skillDescription}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
