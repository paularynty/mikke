// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { fetchKanjiList } from "@/lib/fetchKanjiList";
// import { KanjiData } from "@/utils/types";
// import styles from "@/styles/page.module.css";
// import Link from "next/link";

// export const KanjiList = () => {
//   const [kanjiResults, setKanjiResults] = useState<KanjiData[] | null>;
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getKanjiList = async () => {
//       try {
//         const data = await fetchKanjiList();
//         setKanjiResults(data);
//       } catch (error) {
//         setError("Fetched, but failed to return.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getKanjiList();
//   }, []);

// useEffect(() => {
//   const fetchSortedKanji = async () => {
//     if (sortType === "default") return;

//     try {
//       const response = await fetch(`/api/kanji/sorted?sortType=${sortType}`);
//       const resultData = await response.json();
//       setKanjiResults(resultData);
//     } catch (error) {
//       setError("Failed to fetch sorted Kanji data.");
//     }
//   };

//   fetchSortedKanji();
// }, [sortType]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!Array.isArray(kanjiResults) || kanjiResults.length === 0) {
//     return <div>No data available.</div>;
//   }

//   return (
//     <div>
//       <p>test</p>
//       <div className={styles.gridContainer}>
//         {kanjiResults.map((kanji, index) => (
//           <Link
//             key={index}
//             href={`/kanji/${kanji.kanji.character}`}
//             className="grid-item"
//           >
//             <div>
//               {kanji.kanji.character}
//               <div className="kanji-meaning">
//                 {kanji.kanji.meaning || "N/A"}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanjiList;

//   <div className="button-sort">
//     <select
//       defaultValue="default"
//       onChange={(e) => setSortType(e.target.value)}
//       aria-label="Sort Kanji by stroke count"
//     >
//       <option disabled value="default">
//         Sort by
//       </option>
//       <option value="ascending">Ascending (Stroke count)</option>
//       <option value="descending">Descending (Stroke count)</option>
//     </select>
//   </div>
