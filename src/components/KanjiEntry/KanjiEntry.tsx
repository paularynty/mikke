"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/page.module.css";
import { fetchKanjiEntry } from "@/lib/kanjiEntry";

export const KanjiEntry = () => {
  const [kanjiData, setKanjiData] = useState(null); // State to hold kanji data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const router = useRouter();
  const { character } = router.query;

  useEffect(() => {
    if (!character) return; // Wait until the character is available

    const fetchKanjiData = async () => {
      try {
        const response = await fetchKanjiEntry(
          `${encodeURIComponent(character as string)}`
        );
        // (
        //   `/api/kanjiDetails/${encodeURIComponent(character as string)}`
        // );
        const data = await response.json();
        setKanjiData(data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch kanji data.");
      } finally {
        setLoading(false);
      }
    };

    fetchKanjiData();
  }, [character]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.card}>
      {kanjiData ? (
        <div>
          <div className={styles.kanjiDetail}>{kanjiData.kanji.character}</div>
          <h2>Meaning</h2>
          <div className={styles.result}>{kanjiData.kanji.meaning.english}</div>
          <h2>Onyomi</h2>
          <div className={styles.result}>{kanjiData.kanji.onyomi.katakana}</div>
          <div className={styles.result}>{kanjiData.kanji.onyomi.romaji}</div>

          <h2>Kunyomi</h2>
          <div className={styles.result}>
            {kanjiData.kanji.kunyomi.hiragana}
          </div>
          <div className={styles.result}>{kanjiData.kanji.kunyomi.romaji}</div>
          <h2>Strokes</h2>
          <div className={styles.result}>{kanjiData.kanji.strokes.count}</div>
        </div>
      ) : (
        <div>No data available for this kanji.</div>
      )}
    </div>
  );
};
