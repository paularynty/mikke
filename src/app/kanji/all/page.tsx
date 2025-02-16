import { fetchKanjiList } from "@/lib/fetchKanjiList";
import styles from "@/styles/page.module.css";
import { KanjiData } from "@/utils/types";
import Link from "next/link";

export default async function AllKanjiPage(props: {
  params: Promise<KanjiData>;
}) {
  const kanjiData = await fetchKanjiList();
  return (
    <div>
      <div className={styles.gridContainer}>
        {kanjiData.map((kanji, index) => (
          <Link
            className={styles.gridItem}
            key={index}
            href={`/kanji/${kanji.kanji.character}`}
          >
            {kanji.kanji.character}
            <p className={styles.gridItemMeaning}>
              {kanji.kanji.meaning || "N/A"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
