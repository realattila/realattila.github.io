import ProgrammerImagesSvg from "./programmer-image";

import styles from "./hero.module.scss";

export default function MainPageHero() {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          {/* <h2 className={styles.firstText}>I`m</h2> */}
          <h1 className={styles.secondText}>[ATTILA]</h1>
          <h2 className={styles.thirdText}>Expert web developer</h2>
        </div>
        {/* <div className={styles.svgWrapper}>
          <ProgrammerImagesSvg className={styles.svg} />
        </div> */}
      </div>
    </section>
  );
}
