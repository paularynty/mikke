import styles from "@/styles/page.module.css";
import { InputProps } from "@/utils/types";
import React from "react";

const KanjiSearch: React.FC<InputProps> = ({ input, setInput, onSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className={styles.intro}>
      <h1>Search kanji</h1>
      <form onSubmit={onSubmit} aria-label="Kanji search field">
        <div className={styles.inputContainer}>
          <input
            id="word"
            type="string"
            className={styles.input}
            placeholder="Enter English word"
            value={input.word}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className={styles.buttonSearch}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default KanjiSearch;
