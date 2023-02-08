import { ReactElement } from "react";
import Head from "next/head";
import Default from "@/src/layouts/Default/Default";
import styles from "./awards.module.css";
import Image from "next/image";
import august2019 from "@/src/assets/images/august_2019.jpg";
import august20192 from "@/src/assets/images/august_2019_2.jpg";
import robodnic1 from "@/src/assets/images/robodnic_4.jpg";
import robodnic2 from "@/src/assets/images/robodnic_2.jpg";
import robodnic3 from "@/src/assets/images/robodnic_3.jpg";
import robodnic4 from "@/src/assets/images/robodnic_1.jpg";
import smarthome1 from "@/src/assets/images/smarthome_1.jpg";
import smarthome4 from "@/src/assets/images/smarthome_4.jpg";

function Awards() {
  return (
    <>
      <Head>
        <title>AWARDS - LE TRONG TUAN | FEE</title>
        <meta name="description" content="AWARDS - LE TRONG TUAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.wrapper}>
        <div className={`${styles.inner} ${styles.f_column}`}>
          <div className={styles.images}>
            <Image
              loading="lazy"
              className={styles.image}
              src={august2019}
              alt="august 2019"
            />
            <Image
              loading="lazy"
              className={styles.image}
              src={august20192}
              alt="august 2019"
            />
          </div>
          <br />
          <br />
          <p className="sm_text">
            second prize in the city ranking for science and technology with
            &quot;Social network to share knowledge of learning English&quot; -
            2018
          </p>
          <p className="primary_text">as the main software developer</p>
        </div>
        <div className={`${styles.inner} ${styles.f_column}`}>
          <div className={styles.images}>
            <Image
              loading="lazy"
              className={styles.image}
              src={robodnic1}
              alt="august 2019"
            />
            <Image
              loading="lazy"
              className={styles.image}
              src={robodnic2}
              alt="august 2019"
            />
            <Image
              loading="lazy"
              className={styles.image}
              src={robodnic3}
              alt="august 2019"
            />
            <Image
              loading="lazy"
              className={styles.image}
              src={robodnic4}
              alt="august 2019"
            />
          </div>
          <br />
          <br />
          <p className="sm_text">
            third prize in ROBODNIC for students of Da Nang city 2019
          </p>
          <p className="primary_text">as the leader of AOT Crew</p>
        </div>
        <div className={`${styles.inner} ${styles.f_column}`}>
          <div className={styles.images}>
            <Image
              loading="lazy"
              className={styles.image}
              src={smarthome4}
              alt="august 2019"
            />
            <Image
              loading="lazy"
              className={styles.image}
              src={smarthome1}
              alt="august 2019"
            />
          </div>
          <br />
          <br />
          <p className="sm_text">
            third prize in the city ranking for science and technology with
            &quot;Smart Home model using voice with Google Assistance&quot; -
            2019
          </p>
          <p className="primary_text">as the main system developer</p>
        </div>
      </main>
    </>
  );
}

Awards.getLayout = function getLayout(Awards: ReactElement) {
  return <Default>{Awards}</Default>;
};

export default Awards;
