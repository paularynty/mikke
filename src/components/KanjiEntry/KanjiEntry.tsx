

// import { fetchKanjiEntry } from "@/lib/kanjiEntry";
// import styles from "@/styles/page.module.css";

// const KanjiEntry = async (character: string) => {
//   console.log("param:", character);
//   const decoded = decodeURIComponent(character); // Decode the kanji character
//   console.log("param:", decoded);
//   const kanjiDataArray = await fetchKanjiEntry(decoded);

//   if (!kanjiDataArray || kanjiDataArray.length === 0) {
//     return <div className={styles.card}>No data available for this kanji.</div>;
//   }

//   const kanjiData = kanjiDataArray[0];

//   return (
//     <div className={styles.card}>
//       <div className={styles.kanjiDetail}>{kanjiData.kanji.character}</div>
//       <h2>Meaning</h2>
//       <div className={styles.result}>{kanjiData.kanji.meaning.english}</div>
//       <h2>Onyomi</h2>
//       <div className={styles.result}>{kanjiData.kanji.onyomi.katakana}</div>
//       <div className={styles.result}>{kanjiData.kanji.onyomi.romaji}</div>
//       <h2>Kunyomi</h2>
//       <div className={styles.result}>{kanjiData.kanji.kunyomi.hiragana}</div>
//       <div className={styles.result}>{kanjiData.kanji.kunyomi.romaji}</div>
//       <h2>Strokes</h2>
//       <div className={styles.result}>{kanjiData.kanji.strokes.count}</div>
//     </div>
//   );
// };

// export default KanjiEntry;

// "use client";

// import { useState, useEffect } from "react";
// import styles from "@/styles/page.module.css";
// import fetchKanjiEntry from "@/lib/kanjiEntry";

// export const KanjiEntry = () => {
//   const [kanjiData, setKanjiData] = useState(null); // State to hold kanji data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchKanjiData = async () => {
//       try {
//         console.log("we go here");
//         const response = await fetchKanjiEntry(character as string);
//         const data = await response.json();
//         setKanjiData(data);
//       } catch (error) {
//         console.error(error);
//         setError("Failed to fetch kanji data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchKanjiData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className={styles.card}>
//       {kanjiData ? (
//         <div>
//           <div className={styles.kanjiDetail}>{kanjiData.kanji.character}</div>
//           <h2>Meaning</h2>
//           <div className={styles.result}>{kanjiData.kanji.meaning.english}</div>
//           <h2>Onyomi</h2>
//           <div className={styles.result}>{kanjiData.kanji.onyomi.katakana}</div>
//           <div className={styles.result}>{kanjiData.kanji.onyomi.romaji}</div>

//           <h2>Kunyomi</h2>
//           <div className={styles.result}>
//             {kanjiData.kanji.kunyomi.hiragana}
//           </div>
//           <div className={styles.result}>{kanjiData.kanji.kunyomi.romaji}</div>
//           <h2>Strokes</h2>
//           <div className={styles.result}>{kanjiData.kanji.strokes.count}</div>
//         </div>
//       ) : (
//         <div>No data available for this kanji.</div>
//       )}
//     </div>
//   );
// };
