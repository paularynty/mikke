import styles from "@/styles/page.module.css";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className={styles.footer}>
      <p>
        © Paula Rynty 2025. Website built with React and Typescript.{" "}
        <a href="https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji/">
          Kanji database
        </a>
        <select
          id="theme-dropdown"
          aria-label="Page theme"
          className={styles.dropDown}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="system">Auto</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </p>
    </footer>
  );
};
