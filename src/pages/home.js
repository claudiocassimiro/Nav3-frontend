import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.containerLogo}>
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <button className={styles.openModalButton}>
          <span className={styles.text}>Faça uma busca</span>
        </button>
        <button type="button" className={styles.OptionsButton}>
          Preferências
        </button>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.optionsCard}>
          <span className={styles.cardRole}>Listar Pessoas</span>
        </div>
      </main>
    </div>
  );
}
