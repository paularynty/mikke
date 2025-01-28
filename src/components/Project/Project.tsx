import styles from "./project.module.css";

export const Project = (elements: {
  name: string;
  description: string;
  image_path?: string;
}) => {
  const { name, description, image_path } = elements;
  const projectPath = `/project/${name.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={styles.projectSubcontainer}>
      <div className={styles.projectImage}>
        <img src={image_path} alt="Project"></img>
      </div>
      <div className={styles.projectDescription}>
        <h1>
          <a href={projectPath}>{name}</a>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
