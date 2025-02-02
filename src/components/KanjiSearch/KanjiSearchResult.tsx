"use client";
import { useRouter } from "next/navigation";
import styles from "@/styles/page.module.css";

interface SearchResultsProps {
  data: { kanji: string; radical: string }[];
}

export const KanjiSearchResult: React.FC<SearchResultsProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <h2>Search results</h2>
      <div className={styles.result}>
        <div className={styles.gridContainer}>
          {data.length > 0 ? (
            data.map(({ kanji }, index) => (
              <div
                className={styles.gridItem}
                key={index}
                onClick={() => router.push(`/kanji/${kanji}`)}
              >
                {kanji}
              </div>
            ))
          ) : (
            <div>No kanji found.</div>
          )}
        </div>
      </div>
    </>
  );
};
