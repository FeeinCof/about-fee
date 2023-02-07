import "@fortawesome/fontawesome-svg-core/styles.css";
import { LinesButton } from "@/src/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isNavBar, setNavBar] = useState(false);
  const pathname = useRouter().pathname;
  const navHandle = () => {
    setNavBar(!isNavBar);
  };
  return (
    <>
      <div className={styles.nav_mobile_btn}>
        <LinesButton onClick={navHandle} />
      </div>
      {isNavBar && (
        <nav className={styles.nav_mobile}>
          <ul className={styles.nav_links}>
            <li className="delay_0">
              <a href="/about">about</a>
            </li>
            <li className="delay_2">
              <a href="/awards">awards</a>
            </li>
          </ul>
          <hr className={styles.nav_hr}></hr>
          <ul className={styles.nav_icons}>
            <a href="https://www.facebook.com/justacoffecup/" target="blank">
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
            </a>
            <a href="https://www.instagram.com/feeisme_/" target="blank">
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </a>
            <a href="https://github.com/FeeinCof/" target="blank">
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/feeisme/" target="blank">
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </a>
          </ul>
          <small>© 2022, about Le Trong Tuan - Fee</small>
        </nav>
      )}
      <header className={styles.wrapper}>
        <nav className={styles.nav_desktop}>
          <ul className={styles.nav_links}>
            <Link href="/about">
              <li className={pathname === "/about" ? styles.active : ""}>
                about
              </li>
            </Link>
            <Link href="/awards">
              <li className={pathname === "/awards" ? styles.active : ""}>
                awards
              </li>
            </Link>
          </ul>
          <ul className={styles.nav_icons}>
            <a href="https://www.facebook.com/justacoffecup/" target="blank">
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
            </a>
            <a href="https://www.instagram.com/feeisme_/" target="blank">
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </a>
            <a href="https://github.com/FeeinCof/" target="blank">
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/feeisme/" target="blank">
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
