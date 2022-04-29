import { useState } from 'react';

import styles from './styles.module.css';

export default function FormSearchData({
  className
}) {
  const [inputData, setInputData] = useState('');
  const [selectData, setSelectData] = useState('nome');
  return (
    <form className={className}>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder={`Digite o ${selectData} da pessoa`}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />

        <div className={styles.customSelect}>
          <select className={styles.select} onChange={(e) => setSelectData(e.target.value)}>
            <option className={styles.options} value="nome">NOME</option>
            <option className={styles.options} value="cpf">CPF</option>
            <option className={styles.options} value="id">ID</option>
          </select>
        </div>
      </div>
    </form>
  );
}
