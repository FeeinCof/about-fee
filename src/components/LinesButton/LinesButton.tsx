import styles from "./LinesButton.module.css";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
const LinesButton = ({ onClick }: { onClick: () => void }) => {
  const [isClose, setClose] = useState<boolean>(false);
  const [isClass, setClass] = useState<boolean>(false);
  const debounced = useDebouncedCallback(() => setClose(!isClose), 750);
  const handleButton = (): void => {
    if (!debounced.isPending()) {
      onClick();
      setClass(!isClass);
      if (!isClose) {
        debounced();
      } else {
        setClose(!isClose);
      }
    }
    return;
  };
  return (
    <div
      className={`${styles.lines_button} ${
        isClose && styles.lines_button_effect
      }`}
    >
      <a aria-expanded="true" tabIndex={-1} onClick={() => handleButton()}>
        {!isClose && (
          <span aria-hidden="true" className={styles.lines}>
            <i
              className={`${styles.line} delay_0 ${
                isClass ? styles.line_effect : styles.line_effect_2
              }`}
            >
              <span className={styles.line_inner}></span>
            </i>
            <i
              className={`${styles.line} delay_1 ${
                isClass ? styles.line_effect : styles.line_effect_2
              }`}
            >
              <span className={styles.line_inner}></span>
            </i>
            <i
              className={`${styles.line} delay_2 ${
                isClass ? styles.line_effect : styles.line_effect_2
              }`}
            >
              <span
                className={styles.line_inner}
                style={{
                  width: "80%",
                }}
              ></span>
            </i>
          </span>
        )}
        {isClose && (
          <span aria-hidden="true" className={styles.lines}>
            <i
              className={`${styles.line_x} ${
                isClass ? styles.line_effect_x_1 : null
              }`}
            ></i>
            <i
              className={`${styles.line_x} delay_1 ${
                isClass ? styles.line_effect_x_2 : null
              }`}
            ></i>
          </span>
        )}
      </a>
    </div>
  );
};

export default LinesButton;
