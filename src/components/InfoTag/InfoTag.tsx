import styles from "./InfoTag.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const InfoTag = ({
  contents,
  link = "",
  github = "",
  visit,
}: {
  contents: string[];
  link?: string;
  github?: string;
  visit?: boolean;
}) => {
  const clickHandle = (e: any) => {
    if (!link || e.target.localName == "svg") {
      return;
    }
    window.open(link);
  };
  return (
    <div className={styles.inner_column} onClick={(e) => clickHandle(e)}>
      {contents.map((a, index) => (
        <div key={index} className={styles.inner_column_content}>
          {a}
        </div>
      ))}
      <div className={styles.inner_column_content}>
        {github && (
          <a className={styles.github} href={github} target={`_blank`}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </div>
      {visit && <div className={styles.visit}>click to visit</div>}
    </div>
  );
};

export default InfoTag;
