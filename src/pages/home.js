import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { useDialogState } from "reakit/Dialog";
import SearchModal from "../components/SearchModal";

import styles from "../styles/Home.module.css";
import FormSearchData from "../components/FormSearchData";

export default function Home() {
  const modal = useDialogState();

  const handleModal = () => {
    modal.show();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.containerLogo}>
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <button onClick={handleModal} className={styles.openModalButton}>
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
      {modal.visible && (
        <SearchModal modal={modal} windowTitle="Faça sua busca">
          <FormSearchData />
        </SearchModal>
      )}
    </div>
  );
}
