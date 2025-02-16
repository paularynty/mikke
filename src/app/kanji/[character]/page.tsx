import { fetchKanjiEntry } from "@/lib/fetchKanjiEntry";
import styles from "@/styles/kanji.module.css";

export default async function KanjiPage(props: {
  params: Promise<{ character: string }>;
}) {
  const params = await props.params;
  const decoded = decodeURIComponent(params.character);
  const kanjiData = await fetchKanjiEntry(decoded);

  return (
    <div className={styles.kanjiEntry}>
      <h1 className={styles.kanjiResult}>{kanjiData.kanjiCharacter}</h1>
      <h2 className={styles.kanjiDetail}>Meaning</h2>
      <p className={styles.kanjiInfo}>{kanjiData.meaningEnglish}</p>
      <h2 className={styles.kanjiDetail}>Onyomi</h2>
      <p className={styles.kanjiInfo}>{kanjiData.onyomiKatakana}</p>
      <p className={styles.kanjiInfo}>{kanjiData.onyomiRomaji}</p>
      <h2 className={styles.kanjiDetail}>Kunyomi</h2>
      <p className={styles.kanjiInfo}>{kanjiData.kunyomiHiragana}</p>
      <p className={styles.kanjiInfo}>{kanjiData.kunyomiRomaji}</p>
      <h2 className={styles.kanjiDetail}>Strokes</h2>
      <p className={styles.kanjiInfo}>{kanjiData.strokeCount}</p>
    </div>
  );
}
