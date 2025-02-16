import styles from "@/styles/footer.module.css";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className={styles.footer}>
      <p>Built by Paula Rynty</p>
      <a href="https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji/">
        Kanji database
      </a>
      <div className={styles.footerContentStart}>
        <select
          id="theme-dropdown"
          aria-label="Page theme"
          className={styles.dropDown}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="system">Theme: Auto</option>
          <option value="dark">Theme: Dark</option>
          <option value="light">Theme: Light</option>
        </select>
      </div>
    </footer>
  );
};
