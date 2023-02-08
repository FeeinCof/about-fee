/* eslint-disable react/no-unescaped-entities */
import type { ReactElement } from "react";
import Head from "next/head";
import Default from "@/src/layouts/Default/Default";
import styles from "./about.module.css";
import Image from "next/image";
import image from "@/src/assets/images/intro_image.jpg";
import { InfoTag } from "@/src/components";
const About = () => {
  return (
    <>
      <Head>
        <title>ABOUT - LE TRONG TUAN | FEE</title>
        <meta name="description" content="ABOUT - LE TRONG TUAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className={styles.wrapper}>
          <div className={`${styles.inner} ${styles.hi_container}`}>
            <p className={`sm_text opacity_animate opacity0 delay_0`}>
              Hi all!
            </p>
            <p className={`primary_text opacity_animate opacity0 delay_0`}>
              Have a good day! 🌻
            </p>
            <br />
            <p className={`primary_text opacity_animate opacity0 delay_5`}>
              LÊ TRỌNG TUẤN - FEE
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div
          className={`${styles.wrapper_padding_over} ${styles.intro_container}`}
        >
          <div className={styles.inner}>
            <p className={`primary_text`}>B.2002, VIETNAM</p>
            <p className={`sm_text`}>Studies and works in Da Nang, VietNam</p>
            <br />
            <br />
            <br />
            <p className={`sm_text`}>
              What will you want to be when you grow up?
            </p>
            <p className={`sm_text`}>
              - With me! Kindy person which is a simple wish i want to be!
            </p>
            <br />
            <p className={`sm_text`}>
              His programming passion and hard work had made him some awards
              when he was in high school. Until he was at University, within
              curiosity and desirous impelled him gap two years experiencing
              different jobs.
            </p>
            <p className={`sm_text`}>
              Now he's back on the way that he chose at first. He believes that
              technology and engineering are the way can help him grow up and
              contribute value to his world...
            </p>
          </div>
          <div className={styles.inner}>
            <Image
              src={image}
              className={styles.image}
              alt="LE TRONG TUAN"
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.wrapper_column}>
          <h2 className={styles.inner_column_tilte}>Education</h2>
          <InfoTag
            contents={[
              "2020",
              "Major in Electronics and Telecommunication (Advanced Program)",
              "Danang University of Science and Technology, VietNam",
            ]}
          />
        </div>
        <div className={styles.wrapper_column}>
          <h2 className={styles.inner_column_tilte}>Projects</h2>
          <InfoTag
            contents={[
              "11.2018",
              "Social network to share knowledge of learning English",
              "Thai Phien high school, Da Nang",
            ]}
          />
          <InfoTag
            contents={[
              "9.2019",
              "Leader of AOT Crew - ROBODNIC 2019",
              "Thai Phien high school, Da Nang",
            ]}
          />
          <InfoTag
            contents={[
              "12.2019",
              "Smart Home model using voice with Google Assistance",
              "Thai Phien high school, Da Nang",
            ]}
          />
          <InfoTag contents={["2020-11.2022", "Gap years", ""]} />
          <InfoTag
            contents={[
              "12.2022",
              "Courses page for Homer & Greek",
              "Homer & Greek from India",
            ]}
            link={`https://courses-page-for-homer-greek.vercel.app/`}
            github={"https://github.com/FeeinCof/courses-page-for-Homer-Greek"}
          />
          <InfoTag
            contents={[
              "1.2023",
              "Homebud for Freelancer.com",
              "Freelancer.com",
            ]}
            link="https://homebud.vercel.app/"
            github="https://github.com/FeeinCof/homebud"
          />
        </div>
        <div className={styles.wrapper_column}>
          <h2 className={styles.inner_column_tilte}>Pet Projects</h2>
          <InfoTag
            contents={["12.2022", "Todo list using React", ""]}
            link="https://todo-list-sand-nine.vercel.app/"
            github="https://github.com/FeeinCof/todo-list"
          />
        </div>
      </main>
    </>
  );
};

About.getLayout = function getLayout(About: ReactElement) {
  return <Default>{About}</Default>;
};

export default About;
