import { KanjiData } from "@/utils/types";

export const fetchKanjiEntry = async (character: string) => {
  try {
    const response = await fetch(
      `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${encodeURIComponent(
        character
      )}`,
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

    const kanjiData: KanjiData["kanji"] | undefined = data?.kanji;
    const kanjiCharacter: string = kanjiData?.character ?? "";
    const onyomiKatakana: string = kanjiData?.onyomi?.katakana ?? "";
    const onyomiRomaji: string = kanjiData?.onyomi?.romaji ?? "";
    const kunyomiHiragana: string = kanjiData?.kunyomi?.hiragana ?? "";
    const kunyomiRomaji: string = kanjiData?.kunyomi?.romaji ?? "";
    const meaningEnglish: string = kanjiData?.meaning?.english ?? "";
    const strokeCount: number = kanjiData?.strokes?.count ?? 0;

    return {
      kanjiCharacter,
      onyomiRomaji,
      onyomiKatakana,
      kunyomiHiragana,
      kunyomiRomaji,
      meaningEnglish,
      strokeCount,
    };
    // console.log("Formatted data", kanjiData);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};