import { KanjiData } from "@/utils/types";

export default async function fetchKanjiList(): Promise<KanjiData[]> {
  try {
    const response = await fetch(
      "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all/",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "15ae912ac0mshafc017a046e3bb5p1e71e3jsn9cd9b768b7e9",
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Unexpected data format: data is not an array");
    }

    return data.map((item: any) => ({
      kanji: {
        character: item.kanji.character,
        strokes: item.kanji.strokes ? item.kanji.strokes.count : null,
        onyomi: item.kanji.onyomi,
        kunyomi: item.kanji.kunyomi,
        meaning: item.kanji.meaning.english,
      },
    }));

    console.log("Fetch success");
    // console.log("Formatted data", kanjiData);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
