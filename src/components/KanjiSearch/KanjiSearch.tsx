import styles from "@/styles/page.module.css";
import React from "react";

export type Input = {
  word: string;
};

export interface KanjiSearchResults {
  kanji: string;
  radical: string;
}

export interface InputProps {
  input: Input;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const KanjiSearch: React.FC<InputProps> = ({ input, setInput, onSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className={styles.intro}>
      <h1>Search kanji by English word</h1>
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
          <button type="submit" className={styles.button}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default KanjiSearch;
