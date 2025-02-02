import { fetchKanjiEntry } from "@/lib/kanjiEntry";
import styles from "@/styles/page.module.css";

export default async function KanjiPage({
  params,
}: {
  params: { character: string };
}) {
  const kanjiDataArray = await fetchKanjiEntry(params.character);

  if (!kanjiDataArray || kanjiDataArray.length === 0) {
    return <div className={styles.card}>No data available for this kanji.</div>;
  }

  const kanjiData = kanjiDataArray[0];

  return (
    <div className={styles.card}>
      <div className={styles.kanjiDetail}>{kanjiData.kanji.character}</div>
      <h2>Meaning</h2>
      <div className={styles.result}>{kanjiData.kanji.meaning.english}</div>
      <h2>Onyomi</h2>
      <div className={styles.result}>{kanjiData.kanji.onyomi.katakana}</div>
      <div className={styles.result}>{kanjiData.kanji.onyomi.romaji}</div>
      <h2>Kunyomi</h2>
      <div className={styles.result}>{kanjiData.kanji.kunyomi.hiragana}</div>
      <div className={styles.result}>{kanjiData.kanji.kunyomi.romaji}</div>
      <h2>Strokes</h2>
      <div className={styles.result}>{kanjiData.kanji.strokes.count}</div>
    </div>
  );
}
